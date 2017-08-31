from django.forms import modelformset_factory

from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _
from mediastore.admin import ModelAdmin
from functools import partial


class CategoryAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','is_public','is_featured','sort_value')
    list_editable = ('is_public','is_featured','sort_value',)

    fieldsets = (
        (_('Basic'), {
            'fields': (
                'title',
            )
        }),
        (_('Settings'), {
            'fields': (
                'is_public',
                'is_featured',
                'sort_value',
            )
        }),
    )


class ArticleAdmin(TinyMCEAdminMixin, ModelAdmin):
    list_display = ('title','author','post_date','is_public','is_featured','sort_value',)
    list_filter = ('is_public', 'is_featured')
    search_fields = ('title','author__first_name','author__last_name',)

    full_fieldsets = (
        (_('Basic'),{
            'fields':(
                'title',
                'author',
                'post_date',
                'list_description',
                'description',
                'main_image',
                'gallery',
            )
        }),
        (_('Settings'),{
            'fields': (
                'category',
                'sort_value',
                'is_public',
                'is_featured'
            )
        })
    )

    basic_fieldsets = (
        (_('Basic'),{
            'fields':(
                'title',
                'author',
                'post_date',
                'list_description',
                'description',
                'main_image',
                'gallery',
            )
        }),
        (_('Settings'), {
            'fields': (
                'category',
            )
        })
    )

    filter_horizontal = ('category',)

    def get_fieldsets(self, request, obj=None):
        if request.user.has_perm('can_publish'):
            return self.full_fieldsets
        else:
            return self.basic_fieldsets




admin.site.register(Category, CategoryAdmin)
admin.site.register(Article, ArticleAdmin)
