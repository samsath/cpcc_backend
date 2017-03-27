from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class EnquiryAdmin(admin.ModelAdmin):
    list_display = ('email','first_name','last_name','created')
    search_fields = ('email','first_name','last_name',)
    fieldsets = (
        (_('Message'),{
            'fields':(
                'email',
                'first_name',
                'last_name',
                'message',
                'created',
                'modified',
            )
        })
    )
    readonly_fields = ('email','first_name','last_name','message','created','modified',)

admin.site.register(Enquiry,EnquiryAdmin)