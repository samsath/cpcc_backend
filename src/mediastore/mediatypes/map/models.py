# -*- coding: utf-8 -*-
from django.utils.translation import ugettext as _
from django.db import models
from django.contrib.gis.db import models as gismodel
from mediastore.models import Media


class Map(Media, gismodel.Model):
    help_text = _('Store elements for plotting a map,')
    centre = gismodel.PointField(_('centre'))
    path = gismodel.LineStringField(_('Path'))
    start = gismodel.PointField(_('Start'))
    end = gismodel.PointField(_('End'))
    objects = gismodel.GeoManager()

    class Meta:
        app_label = 'mediastore'
        verbose_name = _('Map')
        verbose_name_plural = _('Maps')