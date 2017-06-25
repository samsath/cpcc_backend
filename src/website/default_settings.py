#!/usr/bin/env python3
import os
import configparser
from datetime import timedelta

PROJECT_ROOT = os.path.dirname(
    os.path.dirname(os.path.dirname(__file__)))


def _project_config():
    config_file = os.path.join(PROJECT_ROOT, 'project.ini')
    project_config = configparser.ConfigParser()
    project_config.read(config_file)
    return project_config
project_config = _project_config()


PROJECT_NAME = project_config.get('project', 'name')
DOMAIN = project_config.get('project', 'domain')

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SITE_ID = 1

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
    'staging.chiswickcanoe.co.uk',
    ]


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
    'tinymce_4',
    'django.contrib.admin',
    'django.contrib.messages',
    'django.contrib.sites',
    'django.contrib.staticfiles',
    'django.contrib.gis',

    'django_extensions',
    'flatblocks',
    #'lettuce.django',
    'corsheaders',


    #rest
    'rest_framework',
    'rest_framework_gis',
    'django_filters',
    #'rest_framework.authtoken',
    'guardian',
    'knox',

    'django_templatequery',

    'sortedm2m',
     'taggit',
    'easy_thumbnails',
    'mediastore',
    'mediastore.mediatypes.download',
    'mediastore.mediatypes.embeded',
    'mediastore.mediatypes.image',
    'mediastore.mediatypes.pdf',
    'mediastore.mediatypes.video',
    'mediastore.mediatypes.map',

    #programs
    'website.accounts',
    'website.article',
    'website.faq',
    'website.membership',
    'website.newsletter',
    'website.clubsessions',
    'website.calendar',
    'website.homepage',
    'website.enquiry',
    'website.abouts',

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    #'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

CORS_ORIGIN_WHITELIST = (
    'localhost:8000',
    'localhost:4200',
    '127.0.0.1:9000'
)

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
        'DIRS': [os.path.join(PROJECT_ROOT, 'frontend/'),os.path.join(PROJECT_ROOT, 'templates/')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.contrib.auth.context_processors.auth',
                'django.template.context_processors.debug',
                'django.template.context_processors.i18n',
                'django.template.context_processors.media',
                'django.template.context_processors.static',
                'django.template.context_processors.tz',
                'django.contrib.messages.context_processors.messages',

            ],
        },
    },
]

AUTH_USER_MODEL = 'accounts.User'
ROOT_URLCONF = 'website.urls'

THUMBNAIL_ALIASES = {
    '': {
        'avatar': {'size': (50, 50), 'crop': True},
    },
}

AUTH_PASSWORD_VALIDATORS = [

]


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

REST_KNOX = {
  'SECURE_HASH_ALGORITHM': 'cryptography.hazmat.primitives.hashes.SHA512',
  'AUTH_TOKEN_CHARACTER_LENGTH': 64,
  'TOKEN_TTL': timedelta(hours=10),
  'USER_SERIALIZER': 'knox.serializers.UserSerializer',
}

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': (
        #'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication'
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

CSRF_USE_SESSIONS = True
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
#                            Weather api                                  #
###########################################################################
APIXU_URL = 'api.apixu.com/v1/forecast.json'
APIXU_KEY = '92e8f65f2c6244c7a28233425172305'
APIXU_LOCATION = 'chiswick'
APIXU_DAYS = 10

###########################################################################
#                          local settings import                          #
###########################################################################
'''
try:
    from .local_settings import *
    if 'apply_settings' in globals():
        apply_settings(globals())
except ImportError:
    pass
'''