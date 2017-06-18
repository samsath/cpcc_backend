from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('email','name','created')
    search_fields = ('email','name',)
    fieldsets = (
        (_('Message'), {
            'fields': (
                'email',
                'name',
                'message',
                'created',
                'modified',
            )
        }),
    )
    readonly_fields = ('email','name','message','created','modified',)

admin.site.register(Enquiry,EnquiryAdmin)