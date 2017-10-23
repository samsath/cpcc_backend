from .models import *
from django.contrib import admin
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin


class GalleryAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title', 'sort_value',)
    list_editable = ('sort_value',)
    fieldsets = (
        (_('Basic'), {
           'fields':(
               'title',
               'list_description',
               'description',
               'main_image',
               'gallery',
           )
        }),
        (_('Settings'), {
            'fields':(
                'sort_value',
            ),
        }),
    )


admin.site.register(Gallery, GalleryAdmin)