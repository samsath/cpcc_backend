# -*- coding: utf-8 -*-
from django.contrib.gis import admin
from mediastore.admin import MediaAdmin
from mediastore.mediatypes.map.models import Map


class MapAdmin(MediaAdmin, admin.OSMGeoAdmin):
    list_display = ('id', 'name','centre', 'created')
    default_lon = -27914.88257
    default_lat = 6707153.07222
    default_zoom = 15

admin.site.register(Map, MapAdmin)