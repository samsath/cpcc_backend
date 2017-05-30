from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin


class AboutAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','is_public','modified')
    list_editable = ('is_public',)

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
            )
        })
    )

admin.site.register(About, AboutAdmin)