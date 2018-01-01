from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from django.conf.urls import url
from functools import update_wrapper
from django.http import HttpResponseRedirect
from django.template.response import TemplateResponse
from django import forms
from mediastore.admin import ModelAdmin
from .imports import calendarinput, calendarStartEndTide


class WeatherTypeAdmin(TinyMCEAdminMixin,admin.ModelAdmin):
    list_display = ('title','slug',)


class TideAdmin(TinyMCEAdminMixin,admin.TabularInline):
    list_display = ('time','level',)
    model = Tide


class EventTabAdmin(TinyMCEAdminMixin, admin.StackedInline):
    model = Event
    extra = 1


class CalendarAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('date','sun_rise','sun_set',)
    search_fields = ('date',)
    date_hierarchy = 'date'
    inlines = [TideAdmin,EventTabAdmin]


class EventAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','event_type','date','author','is_public','is_featured')
    list_filter = ('event_type',)
    search_fields = ('title',)
    full_fieldsets = (
        (_('Event'), {
            'fields': (
                'title',
                'event_type',
                'date',
                'start_time',
                'end_time',
                'author',
                'description',
                'map',
                'main_image',
                'gallery',
            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'is_featured',
            )
        })
    )

    basic_fieldsets = (
        (_('Event'), {
            'fields': (
                'title',
                'event_type',
                'date',
                'start_time',
                'end_time',
                'author',
                'description',
                'map',
                'main_image',
                'gallery',
            )
        }),
    )

    def get_fieldsets(self, request, obj=None):
        if self.has_delete_permission(request):
            return self.full_fieldsets
        else:
            return self.basic_fieldsets



class ExtraFieldsAdmin(admin.TabularInline):
    model = ExtraFields


class TripAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','start_date','end_date','is_public','is_featured')
    list_editable = ('is_public','is_featured',)
    search_fields = ('title',)
    fieldsets = (
        (_('Event'),{
            'fields':(
                'title',
                'day',
                'start_date',
                'end_date',
                'list_description',
                'description',
                'map',
                'main_image',
                'gallery',
                'documents',
            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'is_featured',
            )
        })
    )
    inlines = [ExtraFieldsAdmin,]


class PlaEventAdmin(admin.ModelAdmin):
    list_display = ('eventid', 'title','created','modified')
    filter_horizontal = ('calendar',)


def load_in_data(modeladmin, request, queryset):
    for instance in queryset:
        calendarinput(instance)
        calendarStartEndTide(instance)


load_in_data.short_description = 'Load the uploaded file to the System'


class TideDataAdmin(admin.ModelAdmin):
    list_display = ('id','file', 'created',)
    readonly_fields = ('inputted','converted',)
    actions = [load_in_data]


admin.site.register(WeatherTypes, WeatherTypeAdmin)
admin.site.register(Calendar, CalendarAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Trips, TripAdmin)
admin.site.register(PlaEvent, PlaEventAdmin)
admin.site.register(TideData, TideDataAdmin)
admin.site.register(Windy)
