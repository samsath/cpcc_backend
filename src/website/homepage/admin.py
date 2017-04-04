from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


class NotificationAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','message','start','end','is_public')
    list_editable = ('is_public',)
    search_fields = ('title','message',)
    fieldsets = (
        (_('Notification'), {
            'fields': (
                'title',
                'message',
                'start',
                'end',
                'author',
            )
        }),
        (_('Settings'),{
            'fields':(
                'is_public',
                'is_featured',
            )
        }),
    )


class HomagePageAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','is_public',)
    fieldsets = (
        (_('Items'),{
            'fields':(
                'title',
                'description',
                'is_public'
            )
        }),
    )


class MenuAdmin(admin.ModelAdmin):
    list_display = ('title','link','sort_value')
    list_editable = ('sort_value',)


admin.site.register(Notification, NotificationAdmin)
admin.site.register(Homepage, HomagePageAdmin)
admin.site.register(Menu, MenuAdmin)