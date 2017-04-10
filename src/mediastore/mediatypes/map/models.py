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
    start_name = gismodel.CharField(_('Start Name'), max_length=255, blank=True, null=True)
    end = gismodel.PointField(_('Middle or End'))
    end_name = gismodel.CharField(_('Middle or End Name'), max_length=255, blank=True, null=True)
    objects = gismodel.GeoManager()

    class Meta:
        app_label = 'mediastore'
        verbose_name = _('Map')
        verbose_name_plural = _('Maps')