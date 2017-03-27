from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class FaqAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('question','answer','is_public','sort_value',)
    list_editable = ('is_public','sort_value',)
    search_fields = ('question','answer')
    fieldsets = (
        (_('Faq'),{
            'fields':(
                'question',
                'answer',
            )
        }),
        (_('Settings'), {
            'fields':(
                'is_public',
                'sort_value',
            )
        })
    )

admin.site.register(Faq, FaqAdmin)