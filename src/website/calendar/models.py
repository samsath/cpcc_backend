from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from mediastore.fields import MediaField, MultipleMediaField
from django.contrib.gis.db import models as gismodel


class WeatherTypes(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    slug = AutoSlugField(populate_from=('title',), unique=True, overwrite=True)
    class_code = models.CharField(_('Code'), max_length=255)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title


class Calendar(models.Model):
    date = models.DateField(_('Date'))
    sun_rise = models.TimeField(_('Sun rise'), blank=True, null=True)
    sun_set = models.TimeField(_('Sun set'), blank=True, null=True)
    temperature = models.FloatField(_('Temperature'), blank=True, null=True)
    weather = models.ForeignKey(WeatherTypes, blank=True, null=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return str(self.date)

    def __str__(self):
        return str(self.date)

    class Meta:
        verbose_name = 'Calendar'
        verbose_name_plural = 'Calendar'
        ordering = ['date',]


class Tide(models.Model):
    day = models.ForeignKey(Calendar)
    time = models.TimeField(_('Time'))
    level = models.FloatField(_('Level'))
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return "{0} @ {1}".format(self.level, self.time)

    def __str__(self):
        return "{0} @ {1}".format(self.level, self.time)


class Event(Base):
    EVENT_TYPE =(
        ('closed',_('Closed')),
        ('notice',_('Notice')),
        ('event',_('Event')),
        ('trip',_('Trip'))
    )

    date = models.ForeignKey(Calendar)
    event_type = models.CharField(_('Event Type'), max_length=255, choices=EVENT_TYPE)
    start_time = models.TimeField(_('Start Time'), blank=True, null=True)
    end_time = models.TimeField(_('End Time'), blank=True, null=True)
    author = models.ForeignKey(User, blank=True, null=True)
    description = models.TextField(_('Description'), blank=True, null=True)
    map = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'map'},
                          related_name='event_map')
    main_image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='event_main_image')
    gallery = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model': 'image'},
                                 related_name='event_gallery')

    def __unicode__(self):
        return "{0} on {1}".format(self.title, self.date)

    def __str__(self):
        return "{0} on {1}".format(self.title, self.date)

    class Meta:
        verbose_name = 'Event'
        verbose_name_plural = 'Event'
        ordering = ['date',]


class Trips(Base):
    list_description = models.CharField(_('List Description'), max_length=255, blank=True, null=True)
    description = models.TextField(_('Description'), blank=True, null=True)
    day = models.ForeignKey(Calendar)
    start_date = models.DateTimeField(_('Start Date and Time'), blank=True, null=True)
    end_date = models.DateTimeField(_('End Date and Time'), blank=True, null=True)
    map = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'map'},
                          related_name='trip_map')
    main_image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='trips_main_image')
    gallery = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model': 'image'},
                                 related_name='trips_gallery')

    def __unicode__(self):
        return "{0} on {1}".format(self.title, self.day)

    def __str__(self):
        return "{0} on {1}".format(self.title, self.day)

    class Meta:
        verbose_name = 'Trip'
        verbose_name_plural = 'Trips'
        ordering = ['day',]


class ExtraFields(models.Model):
    trips = models.ForeignKey(Trips)
    title = models.CharField(_('Title'), max_length=255)
    value = models.CharField(_('Value'), max_length=255)
    sort_value = models.IntegerField(_('Sort Value'), blank=True, null=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return "{0} on {1}".format(self.trips, self.day)

    def __str__(self):
        return "{0} on {1}".format(self.trips, self.day)

    class Meta:
        verbose_name = 'Extra Field'
        verbose_name_plural = 'Extra Fields'
        ordering = ['sort_value',]


class PlaEvent(gismodel.Model):
    eventid = gismodel.IntegerField(_('Event ID'))
    title = gismodel.CharField(_('Title'), max_length=255)
    description = gismodel.TextField(_('Description'), null=True, blank=True)
    club_name = gismodel.CharField(_('Club name'), max_length=255, blank=True, null=True)
    club_location = gismodel.PointField(_('Club location'), blank=True, null=True)
    from_name = gismodel.CharField(_('Location From Name'), max_length=255, blank=True, null=True)
    from_location = gismodel.PointField(_('From location'), blank=True, null=True)
    from_description = gismodel.TextField(_('From description'), blank=True, null=True)
    from_date = gismodel.DateField(_('From Date'), blank=True, null=True)
    from_time = gismodel.TimeField(_('From Time'), blank=True, null=True)
    to_name = gismodel.CharField(_('Location To Name'), max_length=255, blank=True, null=True)
    to_location = gismodel.PointField(_('To location'), blank=True, null=True)
    to_description = gismodel.TextField(_('To description'), blank=True, null=True)
    to_date = gismodel.DateField(_('To Date'), blank=True, null=True)
    to_time = gismodel.TimeField(_('To Time'), blank=True, null=True)
    river_closure = gismodel.NullBooleanField(_('River Closure'), default=None)
    link = gismodel.CharField(_('Link'), max_length=255, blank=True, null=True)
    group_type = gismodel.CharField(_('Type'), max_length=255, blank=True, null=True)
    district_name_one = gismodel.CharField(_('District name one'), max_length=255, null=True, blank=True)
    district_description_one = gismodel.CharField(_('District description one'), max_length=255, null=True, blank=True)
    district_name_two = gismodel.CharField(_('District name two'), max_length=255, null=True, blank=True)
    district_description_two = gismodel.CharField(_('District description two'), max_length=255, null=True, blank=True)
    district_name_three = gismodel.CharField(_('District name three'), max_length=255, null=True, blank=True)
    district_description_three = gismodel.CharField(_('District description three'), max_length=255, null=True, blank=True)
    status_name = gismodel.CharField(_('Status name'), max_length=255, null=True, blank=True)
    status_description = gismodel.CharField(_('Status description'), max_length=255, null=True, blank=True)

    calendar = gismodel.ManyToManyField(Calendar, null=True, blank=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return "{0} - {1}".format(self.eventid, self.title)

    def __str__(self):
        return "{0} - {1}".format(self.eventid, self.title)

    class Meta:
        verbose_name = 'PLA Event'
        verbose_name_plural = 'PLA Events'
        ordering = ['eventid',]