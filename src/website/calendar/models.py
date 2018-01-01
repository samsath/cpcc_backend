from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from mediastore.fields import MediaField, MultipleMediaField
from django.contrib.gis.db import models as gismodel
from django.contrib.postgres.fields import ArrayField
from datetime import datetime
import math


class TideData(models.Model):
    file = models.FileField(upload_to='tides/%Y/')
    inputted = models.BooleanField(_('Inputed data'), default=False)
    year = models.CharField(_('Year'), max_length=4, blank=True, null=True)
    converted = ArrayField(ArrayField(models.FloatField(null=True, blank=True)), default=[],null=True, blank=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return 'Tide Data uploaded on {}'.format(self.created)

    def __str__(self):
        return 'Tide Data uploaded on {}'.format(self.created)

    class Meta:
        verbose_name = 'Tide Upload'
        ordering = ['created']


class WeatherTypes(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    slug = AutoSlugField(populate_from=('title',), unique=True, overwrite=True)
    class_code = models.CharField(_('Code'), max_length=255)
    icon = models.CharField(_('Icon'), max_length=255, blank=True, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title


class CalendarManager(models.Manager):
    def addTide(self, timestamp, level ):
        datereference = datetime.fromtimestamp(timestamp)
        day, created = Calendar.objects.get_or_create(date=datereference.date())
        tide = Tide(day=day,
                    time=datereference.time(),
                    level=level)
        tide.save()

    def addWeather(self, timestamp, sun_rise, sun_set, temperature, weather):
        datereference = datetime.fromtimestamp(timestamp)
        day, created = Calendar.objects.get_or_create(date=datereference.date())
        day.sun_rise = sun_rise
        day.sun_set = sun_set
        day.temperature = temperature
        day.weather = weather
        day.save()


class Calendar(models.Model):
    date = models.DateField(_('Date'))
    sun_rise = models.TimeField(_('Sun rise'), blank=True, null=True)
    sun_set = models.TimeField(_('Sun set'), blank=True, null=True)
    temperature = models.FloatField(_('Temperature'), blank=True, null=True)
    weather = models.ForeignKey(WeatherTypes, blank=True, null=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    objects = models.Manager()
    data = CalendarManager()

    def __unicode__(self):
        return str(self.date)

    def __str__(self):
        return str(self.date)

    @property
    def free(self):
        eventtype = self.event_set.values_list('event_type', flat=True)
        if 'closed' in eventtype or 'cancel' in eventtype:
            return False
        return True

    @property
    def tide(self):
        return [{'x':x.minutes, 'y':x.level} for x in self.tide_set.order_by('time')]

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

    @property
    def seconds(self):
        current = datetime.combine(self.day.date, self.time)
        start = datetime.combine(self.day.date, datetime.min.time())
        return (current - start).seconds

    @property
    def minutes(self):
        current = datetime.combine(self.day.date, self.time)
        start = datetime.combine(self.day.date, datetime.min.time())
        return int((current - start).seconds / 60 )

    def __unicode__(self):
        return "{0} @ {1}".format(self.level, self.time)

    def __str__(self):
        return "{0} @ {1}".format(self.level, self.time)


class Windy(models.Model):
    day = models.ForeignKey(Calendar, blank=True, null=True)
    time = models.TimeField(_('Time'), blank=True, null=True)
    timestamp = models.IntegerField(_('Timestamp'), blank=True, null=True)
    gust = models.FloatField(_('GUST'), blank=True, null=True)
    ugrd = models.FloatField(_('UGRD'), blank=True, null=True)
    vgrd = models.FloatField(_('VGRD'), blank=True, null=True)
    tmp = models.FloatField(_('Temperature'), blank=True, null=True)
    prate = models.CharField(_('PRATE'),max_length=255, blank=True, null=True)
    cwat = models.FloatField(_('CWAT'), blank=True, null=True)
    tcdc_low = models.FloatField(_('TCDC_LOW'), blank=True, null=True)
    tcdc_mid = models.FloatField(_('TCDC_MID'), blank=True, null=True)
    tcdc_high = models.FloatField(_('TCDC_HIGH'), blank=True, null=True)
    rh = models.FloatField(_('RH'), blank=True, null=True)
    pres_old = models.FloatField(_('PRES_OLD'), blank=True, null=True)
    pres = models.FloatField(_('PRES'), blank=True, null=True)
    dpt = models.FloatField(_('DPT'), blank=True, null=True)
    cloud_base = models.FloatField(_('CLOUD_BASE'), blank=True, null=True)
    swellDirection = models.FloatField(_('swellDirection'), blank=True, null=True)
    swellSize = models.FloatField(_('swellSize'), blank=True, null=True)
    swellPeriod = models.FloatField(_('swellPeriod'), blank=True, null=True)
    water_temp = models.FloatField(_('water_temp'), blank=True, null=True)
    direction = models.FloatField(_('Direction'), blank=True, null=True)
    speed = models.FloatField(_('Speed'), blank=True, null=True)
    celsius = models.FloatField(_('celsius'), blank=True, null=True)
    water_celsius = models.FloatField(_('water celsius'), blank=True, null=True)

    class Meta:
        verbose_name = 'Windy'
        verbose_name_plural = 'Windy'
        ordering = ['day','time',]

    def windspeed(self):
        return math.sqrt(pow(float(self.ugrd), 2.0) + pow(float(self.vgrd), 2.0))

    def winddirection(self):
        return 180.0 * math.atan2(self.ugrd, self.vgrd) / 3.141592653589793

    def getCelsius(self, temp):
        return float(temp) - 273.1499938964844



class Event(Base):
    EVENT_TYPE =(
        ('cancel', _('Cancel')),
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
    documents = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model__in': ['download','pdf',]},
                                 related_name='trips_document')

    def __unicode__(self):
        return "{0} on {1}".format(self.title, self.day)

    def __str__(self):
        return "{0} on {1}".format(self.title, self.day)

    class Meta:
        verbose_name = 'Trip'
        verbose_name_plural = 'Trips'
        ordering = ['-day','-start_date','-end_date','title']


class ExtraFields(models.Model):
    trips = models.ForeignKey(Trips)
    title = models.CharField(_('Title'), max_length=255)
    value = models.CharField(_('Value'), max_length=255)
    sort_value = models.IntegerField(_('Sort Value'), blank=True, null=True)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return "{0} on {1}".format(self.trips, self.title)

    def __str__(self):
        return "{0} on {1}".format(self.trips, self.title)

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