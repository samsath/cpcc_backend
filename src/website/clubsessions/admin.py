from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class SessionAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','day_of_week','cost','is_public','is_featured','sort_value',)
    list_editable = ('is_public','is_featured','sort_value')
    fieldsets = (
        (_('Session'), {
            'fields':{
                'title',
                'day_of_week',
                'cost',
                'description',
            }
        }),
        (_('Settings'), {
            'fields':{
                'sort_value',
                'is_public',
                'is_featured',
            }
        })
    )

admin.site.register(Session,SessionAdmin)