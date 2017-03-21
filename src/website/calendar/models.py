from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)


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
        verbose_name_plural = 'Trips'
        ordering = ['sort_value',]