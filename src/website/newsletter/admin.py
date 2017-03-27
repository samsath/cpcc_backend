from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('title','number','is_public','is_featured','sort_value')
    list_editable = ('is_public','is_featured','sort_value',)
    fieldsets = (
        (_('Placement'),{
            'fields':(
                'title',
                'number',
                'postdate',
                'author',
            )
        }),
        (_('Newsletter'),{
            'fields':(
                'newsletter',
            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'is_featured',
                'sort_value',
            )
        }),
    )

admin.site.register(Newsletter, NewsletterAdmin)