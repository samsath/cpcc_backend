from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin


class MembershipAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','tagline','from_date','end_date','is_public','is_featured','sort_value',)
    list_editable = ('is_public','is_featured','sort_value')
    search_fields = ('title','tagline','description',)
    fieldsets = (
        (_('Membership'),{
            'fields':(
                'title',
                'tagline',
                'from_date',
                'end_date',
                'cost',
                'description',
                'download',

            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'is_featured',
                'sort_value',
            )
        })
    )

admin.site.register(Membership, MembershipAdmin)