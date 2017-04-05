# -*- coding: utf-8 -*-
from django.contrib.gis import admin
from mediastore.admin import MediaAdmin
from mediastore.mediatypes.map.models import Map


class MapAdmin(MediaAdmin):
    list_display = ('id', 'name','centre', 'created')

admin.site.register(Map, MapAdmin)