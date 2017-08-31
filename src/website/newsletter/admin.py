from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('title','number','is_public','is_featured','sort_value')
    list_editable = ('is_public','is_featured','sort_value',)
    full_fieldsets = (
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

    basic_fieldsets = (
        (_('Placement'), {
            'fields': (
                'title',
                'number',
                'postdate',
                'author',
            )
        }),
        (_('Newsletter'), {
            'fields': (
                'newsletter',
            )
        }),
    )

    def get_fieldsets(self, request, obj=None):
        if request.user.has_perm('can_publish'):
            return self.full_fieldsets
        else:
            return self.basic_fieldsets

admin.site.register(Newsletter, NewsletterAdmin)