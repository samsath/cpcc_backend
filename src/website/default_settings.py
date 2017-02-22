import os

PROJECT_ROOT = os.path.dirname(
    os.path.dirname(os.path.dirname(__file__)))


def _project_config():
    from ConfigParser import SafeConfigParser
    config_file = os.path.join(PROJECT_ROOT, 'project.ini')
    project_config = SafeConfigParser()
    project_config.read(config_file)
    return project_config
project_config = _project_config()


PROJECT_NAME = project_config.get('project', 'name')
DOMAIN = project_config.get('project', 'domain')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

###########################################################################
#                            project settings                             #
###########################################################################
DEBUG = True
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = [
    '%s' % DOMAIN,
    '%s.' % DOMAIN,
    'www.%s' % DOMAIN,
    'www.%s.' % DOMAIN,
    'localhost',
    '127.0.0.1',
    ]

SECRET_KEY = ''

ADMINS = (
    (u'sam', u'samhipwell@gmail.com'),
)
MANAGERS = ADMINS

# Email settings
# --------------

EMAIL_SUBJECT_PREFIX = '[%s] ' % PROJECT_NAME
DEFAULT_FROM_EMAIL = 'samhipwell@gmail.com'
SERVER_EMAIL = DEFAULT_FROM_EMAIL

# i18n / l10n
# ------------

TIME_ZONE = 'Europe/London'
LANGUAGE_CODE = 'en'
USE_I18N = True


INSTALLED_APPS = [
	'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.admin',
    'django.contrib.messages',
    'django.contrib.sites',
    'django.contrib.staticfiles',
    'django.contrib.webdesign',

    'django_extensions',
    'flatblocks',
    'behave_django',

    #'corsheaders',

    #rest
    'rest_framework',
    'rest_framework.authtoken',
    'guardian',

]

MIDDLEWARE = [
    #'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.admindocs.middleware.XViewMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
]


# Media/Static file handling
# --------------------------

MEDIA_ROOT = os.path.join(PROJECT_ROOT, 'media')
MEDIA_URL = '/media/'

STATIC_ROOT = os.path.join(PROJECT_ROOT, 'media', 'static')
STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(PROJECT_ROOT, 'static'),
]

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
)

# Template related settings
# -------------------------

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(PROJECT_ROOT, 'frontend/'),],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.core.context_processors.debug',
                'django.core.context_processors.i18n',
                'django.core.context_processors.media',
                'django.core.context_processors.static',
                'django.core.context_processors.request',
                'website.context_processors.site',
            ],
        },
    },
]

AUTH_USER_MODEL = 'accounts.User'
ROOT_URLCONF = 'website.urls'

WSGI_APPLICATION = ''

AUTH_PASSWORD_VALIDATORS = [

]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

#CORS_ORIGIN_ALLOW_ALL = True
###########################################################################
#                                 LOGGING                                 #
###########################################################################

LOGGING_DIR = os.path.join(PROJECT_ROOT, 'logs')

# create log directory if not exists yet
if not os.path.exists(LOGGING_DIR):
    os.makedirs(LOGGING_DIR)

LOGGING = {
    'version': 1,
    'formatters': {
        'verbose': {
            'format': '%(levelname)s %(asctime)s %(module)s %(process)d %(thread)d %(message)s'
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'file': {
            'level': 'WARNING',
            'class': 'logging.FileHandler',
            'formatter': 'verbose',
            'filename': os.path.join(LOGGING_DIR, 'django.log'),
        },
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'filters': ['require_debug_false'],
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['file', 'mail_admins'],
            'level': 'ERROR',
            'propagate': False,
        },
    }
}

###########################################################################
#                           REST_FRAMEWORK                             #
###########################################################################
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': (
        #'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ),
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_FILTER_BACKENDS':(
        'rest_framework.filters.DjangoFilterBackend',
    )
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'guardian.backends.ObjectPermissionBackend',
)


###########################################################################
#                            third-party apps                             #
###########################################################################

# TinyMCE
# -------

TINYMCE_DEFAULT_CONFIG = {
    'plugins': 'inlinepopups,safari',
    'theme': 'advanced',
    'theme_advanced_disable': 'underline,strikethrough,justifyleft,justifycenter,justifyright,justifyfull,numlist,outdent,indent,hr,styleselect,sub,sup',
    'theme_advanced_toolbar_location': 'top',
    'theme_advanced_toolbar_align': 'left',
    'relative_urls': False,
    'dialog_type': 'modal',
    'entity_encoding': 'raw',
}

TINYMCE_JS_URL = '/static/tiny_mce/tiny_mce.js'

###########################################################################
#                          local settings import                          #
###########################################################################

try:
    from local_settings import *
    if 'apply_settings' in globals():
        apply_settings(globals())
except ImportError:
    pass