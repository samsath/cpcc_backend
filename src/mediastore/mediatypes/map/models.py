# -*- coding: utf-8 -*-
from django.utils.translation import ugettext as _
from django.db import models
from django.contrib.gis.db import models as gismodel
from mediastore.models import Media
import json

class Map(Media, gismodel.Model):
    help_text = _('Store elements for plotting a map,')
    centre = gismodel.PointField(_('centre'))
    path = gismodel.LineStringField(_('Path'), blank=True, null=True)
    objects = gismodel.GeoManager()

    class Meta:
        app_label = 'mediastore'
        verbose_name = _('Map')
        verbose_name_plural = _('Maps')

    def getcentre(self):
        try:
            return json.loads(self.centre.json)
        except:
            return ""

    def getpath(self):
        try:
            return json.loads(self.path.json)
        except:
            return ""
