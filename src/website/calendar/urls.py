from django.conf.urls import include, url
from .views import *

calendarurl = [
    url(r'(?P<year>[0-9]{4})/$', yearData, name='yeardata' ),
    url(r'(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/$', monthData, name='monthdata'),
    url(r'(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})/$', dayData, name='daydata'),
]