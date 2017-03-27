from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class WeatherTypeAdmin(admin.ModelAdmin):
    list_display = ('title','slug',)


class TideAdmin(admin.TabularInline):
    list_display = ('time','level',)
    models = Tide


class EventTabAdmin(admin.TabularInline):
    models = Event


class CalendarAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('date','sun_rise','sun_set',)
    date_hierarchy = ('date',)
    search_fields = ('date',)
    inlines = [TideAdmin,EventTabAdmin]


class EventAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','event_type','date','author','is_public','is_featured')
    list_editable = ('is_public','is_featured',)
    list_filter = ('event_type',)
    date_hierarchy = ('date',)
    search_fields = ('title',)
    fieldsets = (
        (_('Event'),{
            'fields':{
                'title',
                'event_type',
                'date',
                'start_time',
                'end_time',
                'author',
                'description'
            }
        }),
        (_('Settings'),{
            'fields':{
                'is_public',
                'is_featured',
            }
        })
    )


class ExtraFieldsAdmin(admin.TabularInline):
    models = ExtraFields


class TripAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','author','start_date','end_date','is_public','is_featured')
    list_editable = ('is_public','is_featured',)
    list_filter = ('event_type',)
    date_hierarchy = ('date',)
    search_fields = ('title',)
    fieldsets = (
        (_('Event'),{
            'fields':{
                'title',
                'day',
                'start_date',
                'end_date',
                'author',
                'list_description',
                'description'
            }
        }),
        (_('Settings'),{
            'fields':{
                'is_public',
                'is_featured',
            }
        })
    )
    inlines = [ExtraFieldsAdmin,]


admin.site.register(WeatherTypes, WeatherTypeAdmin)
admin.site.register(Calendar, CalendarAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Trips, TripAdmin)