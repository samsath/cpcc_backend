from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class FaqAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('question','answer','is_public','sort_value',)
    list_editable = ('is_public','sort_value',)
    search_fields = ('question','answer')

    full_fieldsets = (
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

    basic_fieldsets = (
        (_('Faq'),{
            'fields':(
                'question',
                'answer',
            )
        })
    )

    def get_fieldsets(self, request, obj=None):
        if request.user.has_perm('can_publish'):
            return self.full_fieldsets
        else:
            return self.basic_fieldsets

admin.site.register(Faq, FaqAdmin)