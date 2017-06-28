from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin


class AboutAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','is_public','modified','sort_value',)
    list_editable = ('is_public','sort_value',)

    fieldsets = (
        (_('Basic'),{
            'fields':(
                'title',
                'image',
                'gallery',
            )
        }),
        (_('Description'),{
            'fields':(
                'description',
            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'sort_value',
            )
        })
    )

admin.site.register(About, AboutAdmin)
