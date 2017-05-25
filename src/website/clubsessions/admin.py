from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin


class SessionAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','day_of_week','cost','is_public','is_featured','sort_value',)
    list_editable = ('is_public','is_featured','sort_value')
    fieldsets = (
        (_('Session'), {
            'fields':(
                'title',
                'list_description',
                'day_of_week',
                'club',
            )
        }),
        (_('Description'),{
            'fields':(
                'description',
            )
        }),
        (_('Cost'),{
            'fields':(
                'cost',
            )
        }),
        (_('Location'),{
            'fields':(
                'location',
            )
        }),
        (_('Settings'), {
            'fields':(
                'sort_value',
                'is_public',
                'is_featured',
            )
        })
    )

admin.site.register(Session,SessionAdmin)