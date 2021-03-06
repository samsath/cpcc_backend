#!/usr/bin/env python2.7
from __future__ import with_statement
import hashlib
import os
import random
import re
import sys
from pprint import pprint
from fabric import api
from fabric import network
from fabric.colors import blue, green, red, white, yellow, magenta
from fabric.api import abort, cd, local, env, settings, sudo, get, put, hide
from fabric.contrib import files
from fabric.contrib.console import confirm
import logging

logging.basicConfig()
paramiko_logger = logging.getLogger("paramiko.transport")
paramiko_logger.disabled = True


SPACE_SEPERATED_CONFIG_VALUES = [
    'services',
    'loaddata_apps',
]


def _modify_config(config):
    for key in SPACE_SEPERATED_CONFIG_VALUES:
        if key in config:
            config[key] = config[key].split()

    return config


def _load_project_config(environment=None):
    from ConfigParser import SafeConfigParser
    config_file = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        'project.ini')
    project_config = SafeConfigParser()
    project_config.read(config_file)

    def get_section(project_config, section):
        options = {}
        for key in project_config.options(section):
            options[key] = project_config.get(section, key)
        return options

    def get_available_postfixes(project_config, section):
        postfixes = []
        for key in project_config.sections():
            if key.startswith('%s:' % section):
                postfixes.append(key[len('%s:' % section):])
        return postfixes

    if environment:
        env.hosts.extend([
            project_config.get('project', 'host'),
        ])

    config_dict = get_section(project_config, 'project')
    if environment:
        config_dict.update(get_section(project_config, 'project:%s' % environment))
        config_dict['_selected_environment'] = environment
    config_dict['_environments'] = get_available_postfixes(
        project_config,
        'project')
    return config_dict


def _load_environment(environment):
    config = _load_project_config(environment)
    config = _modify_config(config)
    env.config = config
    env.hosts = env.config['host']


def live():
    _load_environment('live')


def staging():
    _load_environment('staging')


def _require_environment(func):
    from functools import wraps
    @wraps(func)
    def decorated(*args, **kwargs):
        if not hasattr(env, 'config') or '_selected_environment' not in env.config:
            print(red('ERROR: You need to select an environment.'))
            print(yellow('The following environments are available:'))
            environments = _load_project_config()['_environments']
            for environment in environments:
                print(yellow('    ' + environment))
            print('You can use them with ' + blue('fab <environment> <command>'))
            print('Example: ' + blue('fab ' + environments[0] + ' deploy'))

            sys.exit(1)
        return func(*args, **kwargs)
    return decorated


SERVER_SETTINGS_FILE = 'server_settings.py'

@_require_environment
def run(command):
    '''
    Overwriting run command to execute tasks as project user.
    '''
    command = command.encode('string-escape')
    sudo('su {user} -c "{command}"'.format(
        command=command,
        **env.config))


@_require_environment
def update(rev=None):
    '''
    * Update the checkout.
    '''
    if rev is None:
        rev = env.config['branch']
    with cd(env.config['path']):
        sudo('git fetch origin', user=env.config['repo_manager'])
        sudo('git reset --hard {rev}'.format(rev=rev), user=env.config['repo_manager'])
    run('mkdir -p {root}/logs'.format(**env.config))
    setup_fs_permissions()


@_require_environment
def migratedb():
    '''
    * run migrate
    '''
    with cd(env.config['path']):
        run('.env/bin/python3 manage.py migrate --noinput')


@_require_environment
def reload_webserver():
    '''
    * reload nginx
    '''
    sudo('/etc/init.d/nginx reload')


@_require_environment
def restart_webserver():
    '''
    * restart nginx
    '''
    sudo('/etc/init.d/nginx restart')


@_require_environment
def showenv():
    pprint(env.config)


@_require_environment
def test():
    # test if the project.ini file is filled correctly
    required_config = (
        ('name'),
        ('repository'),
        ('host'),
        ('domain'),
        ('path'),
        ('django_port'),
    )
    missing_values = []
    for config_name in required_config:
        value = env.config[config_name]
        if not value:
            missing_values.append(config_name)
    if missing_values:
        print(
            red(u'Error: ') +
            u'Please modify ' + yellow('project.ini') +
            u' to contain all the necessary information. ' +
            u'The following options are missing:\n'
        )
        for section, key in missing_values:
            print(yellow(u'\t%s.%s' % (section, key)))
        sys.exit(1)

    # check if project is already set up on the server
    if not files.exists(env.config['path']):
        print(
            red(u'Error: ') +
            u'The project is not yet installed on the server. ' +
            u'Please run ' + blue(u'fab install')
        )
        sys.exit(1)

    # check if project has a local_settings file
    with cd(env.config['path']):
        if not files.exists(env.config['local_settings']):
            print(
                red(u'Error: ') +
                u'The project has no ' + yellow(u'local_settings.py') +
                u' configuration file on the server yet. ' +
                u'Please run ' + blue(u'fab install') + u'.'
            )
            sys.exit(1)

    print(
        green(u'Congratulations. Everything seems fine so far!\n') +
        u'You can run ' + yellow(u'fab deploy') + ' to update the server.'
    )


@_require_environment
def collectstatic():
    '''
    * run .env/bin/python manage.py collectstatic
    '''
    with settings(warn_only=True):
        build()
    with cd(env.config['path']):
        run('.env/bin/python3 manage.py collectstatic -v0 --noinput')


def setup_virtualenv():
    '''
    * setup virtualenv
    '''
    run('python3 -m venv .env --without-pip')
    with cd('.env'):
        run('wget https://bootstrap.pypa.io/get-pip.py')
        run('bin/python3 get-pip.py')
    local('cp config/activate_this.py .env/bin/activate_this.py')


@_require_environment
def pip_install():
    '''
    * install dependcies
    '''
    with cd(env.config['path']):
        run('.env/bin/pip3 install -r requirements.txt')


@_require_environment
def npm_install():
    '''
    * install JS dependencies
    '''
    with cd(env.config['frontend']):
        run('npm install')
        run('npm run build --aot --prod')
        run('npm run precache')


@_require_environment
def bower_install():
    '''
    * install JS dependencies
    '''
    with cd(env.config['path']):
        run('bower install --config.interactive=false')


@_require_environment
def build():
    '''
    * Running build on the server.
    '''
    with cd(env.config['path']):
        run('gulp build')


@_require_environment
def deploy(rev=None):
    '''
    * upload source
    * build static files
    * restart services
    '''
    update(rev=rev)
    #npm_install()
    pip_install()
    migratedb()
    collectstatic()
    restart()


@_require_environment
def create_user():
    with settings(warn_only=True):
        sudo('useradd --home %(path)s %(user)s' % env.config)
        sudo('gpasswd -a %(user)s projects' % env.config)
        sudo('gpasswd -a www-data %(user)s' % env.config)
        sudo('gpasswd -a sam %(user)s' % env.config)
        sudo('gpasswd -a %(user)s sam' % env.config)

@_require_environment
def setup(mysql_root_password=None):
    '''
    * symlink services to /etc/service/<project_name>-<service>
    * symlink and nginx config to /etc/nginx/sites-available
    * symlink and nginx config from /etc/nginx/sites-available to
      /etc/nginx/sites-enabled
    * reload nginx
    '''
    port = _determine_port()
    template_config = {
        u'USER': env.config['user'],
        u'PATH': env.config['path'],
        u'PROJECT_NAME': env.config['name'],
        u'DOMAIN': env.config['domain'],
        u'PORT': port,
        u'DBNAME': env.config['dbname'],
        u'DBUSER': env.config['dbname'],
    }
    with cd(env.config['path']):
        if not files.exists(env.config['local_settings']):
            context = template_config.copy()
            context.update({
                u'SECRET_KEY': _generate_secret_key(),
            })
            files.upload_template(
                u'src/website/local_settings.example.py',
                context=context,
                destination=env.config['local_settings'])
        context = template_config.copy()
        files.upload_template(
            u'config/nginx.conf.template',
            context=context,
            destination=u'config/nginx.conf')
        for service in env.config['services']:
            files.upload_template(
                u'services/%s.template' % service,
                context=context,
                destination=u'services/%s' % service)

    for service_config in _services():
        local_config = env.config.copy()
        local_config.update(service_config)
        if not files.exists('/service/%(service_name)s/run' % local_config):
            sudo('mkdir -p /service/%(service_name)s' % local_config)
            sudo('ln -s %(path)s/services/%(service)s /service/%(service_name)s/run' % local_config)
    if not files.exists('/etc/nginx/sites-available/%(name)s.conf' % env.config):
        sudo('ln -s %(path)s/config/nginx.conf /etc/nginx/sites-available/%(name)s.conf' % env.config)
    if not files.exists('/etc/nginx/sites-enabled/%(name)s.conf' % env.config):
        sudo('ln -s /etc/nginx/sites-available/%(name)s.conf /etc/nginx/sites-enabled' % env.config)

    setup_fs_permissions()
    reload_webserver()
    restart()

@_require_environment
def install(root_password=None):
    create_user()
    stop()

    # create project's parent directory
    if not files.exists(env.config['root']):
        sudo('mkdir -p %s' % env.config['root'])
        sudo('chown {user}:{user} -R {root}'.format(**env.config))
        sudo('chmod g+w -R {root}'.format(**env.config))

    # git clone
    if not files.exists(env.config['path']):
        sudo('git clone {repository} {path}'.format(**env.config), user=env.config['repo_manager'])
    else:
        update()

    setup_fs_permissions()

    network.disconnect_all()

    setup_virtualenv()
    pip_install()

    setup(root_password)

    migratedb()
    npm_install()
    collectstatic()
    start()
    reload_webserver()
    setup_fs_permissions()


    print(green(u'Success!\n\n\n\n'),yellow(u'The project should be running now'))


def _services():
    for service in env.config['services']:
        service_config = {
            'service': service,
            'service_name': '%s-%s' % (env.config['name'], service),
        }
        service_config.update(env.config)
        yield service_config


@_require_environment
def start():
    '''
    * start all services
    '''
    for service_config in _services():
        sudo('svc -u /service/%(service_name)s' % service_config)


@_require_environment
def stop():
    '''
    * stop all services
    '''
    for service_config in _services():
        sudo('svc -d /service/%(service_name)s' % service_config)


@_require_environment
def restart():
    '''
    * restart all services
    '''
    stop()
    start()
    collectstatic()


@_require_environment
def status():
    '''
    * show if services are running
    '''
    with settings(warn_only=True):
        for service_config in _services():
            sudo('svstat /service/%(service_name)s' % service_config)


@_require_environment
def setup_fs_permissions():
    with cd(env.config['path']):
        sudo('chown %(user)s:%(user)s -R .' % env.config)
        sudo('chmod u+rw,g+rw -R .')
        sudo('chmod g+s -R .')
        sudo('chmod +x restart')
        for service in env.config['services']:
            with settings(warn_only=True):
                sudo('chmod +x services/%s' % service)


def _determine_port():
    port = env.config['django_port']
    if port:
        return port
    port_available = re.compile(u'Connection refused\s*$', re.IGNORECASE)
    while True:
        port = random.randint(10000, 11000)
        with settings(hide('warnings', 'stdout', 'running'), warn_only=True):
            result = sudo('echo | telnet localhost %d' % port)
            if port_available.search(result):
                return port


#######################
# Development helpers #
#######################

def _generate_secret_key():
    import random
    return u''.join([
                        random.choice(u'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)')
                        for i in range(50)
                        ])

def _pwdgen():
    import random
    random.seed()
    allowedConsonants = "bcdfghjklmnprstvwxz"
    allowedVowels = "aeiou"
    allowedDigits = "0123456789"
    pwd = random.choice(allowedConsonants) + random.choice(allowedVowels) \
          + random.choice(allowedConsonants) + random.choice(allowedVowels) \
          + random.choice(allowedConsonants) + random.choice(allowedVowels) \
          + random.choice(allowedDigits) + random.choice(allowedDigits)
    return pwd


def devsetup():
    os.chdir(os.path.dirname(__file__))

    run('python3 -m venv .env --without-pip')
    with cd('.env'):
        run('wget https://bootstrap.pypa.io/get-pip.py')
        run('bin/python3 get-pip.py')
    local('cp config/activate_this.py .env/bin/activate_this.py')

    if not os.path.exists('src/website/local_settings.py'):
        local(
            'cp -p src/website/local_settings.development.py src/website/local_settings.py',
            capture=False)


def devupdate():
    os.chdir(os.path.dirname(__file__))

    local('.env/bin/pip3 install --upgrade -r requirements.txt')
    local('npm install')
    local('bower install')
    local('gulp')


def devinit():
    os.chdir(os.path.dirname(__file__))

    devsetup()
    devupdate()
    local('.env/bin/python3 manage.py migrate', capture=False)
    local('.env/bin/python3 manage.py loaddata config/adminuser.json', capture=False)
    local('.env/bin/python3 manage.py loaddata config/localsite.json', capture=False)

    _ascii_art('killer')


def devenv():
    os.chdir(os.path.dirname(__file__))
    devsetup()
    local('.env/bin/pip3 install --upgrade -r requirements.txt')
