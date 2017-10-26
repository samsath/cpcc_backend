# -*- coding: utf-8 -*-
from default_settings import *

import os
path = os.path.abspath(os.path.dirname(__file__))


#DEBUG = True
TEMPLATE_DEBUG = DEBUG


###########################################################################
#                            database settings                            #
###########################################################################

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'cpcc',
        'USER': 'cpcc',
        'PASSWORD': 'cpcccpcc',
        'HOST': 'localhost',
        'PORT': '',
    }
}

###########################################################################
#                             email settings                              #
###########################################################################

DEFAULT_FROM_EMAIL = 'chiswickcanoe@gmail.com'

# GMail Email setup
# -----------------

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'chiswickcanoe@gmail.com'
EMAIL_HOST_PASSWORD = 'CPCC26OCt2017website'
EMAIL_PORT = 587

#EMAIL_BACKEND = 'django.core.mail.backends.filebased.EmailBackend'
#EMAIL_FILE_PATH = os.path.join(PROJECT_ROOT, 'logs/emails/')

# SES Email setup
# ---------------

#EMAIL_BACKEND = 'django_ses.SESBackend'
#AWS_ACCESS_KEY_ID = ''
#AWS_SECRET_ACCESS_KEY = ''


###########################################################################
#                        media / static files urls                        #
###########################################################################

MEDIA_URL = 'http://%(DOMAIN)s/media/'

STATIC_URL = 'http://%(DOMAIN)s/static/'
COMPRESS_URL = STATIC_URL
CURRENT_SYSTEM = "staging.chiswickcanoe.co.uk"

###########################################################################
#                              secret sauce                               #
###########################################################################

# Make this unique, and don't share it with anybody.
SECRET_KEY = '%(SECRET_KEY)s'
