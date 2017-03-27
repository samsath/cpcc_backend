from .models import *
from django.contrib import admin
from django.db import models
from website.base.form import TinyMCEAdminMixin
from django.utils.translation import ugettext_lazy as _


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


class ArticleAdmin(TinyMCEAdminMixin, admin.ModelAdmin):
    list_display = ('title','author','post_date','is_public','is_featured','sort_value',)
    list_editable = ('is_public','is_featured','sort_value',)
    list_filter = ('is_public','is_featured')
    search_fields = ('title','author__first_name','author__last_name',)
    date_hierarchy = ('post_date',)

    fieldsets = (
        (_('Basic'),{
            'fields':(
                'title',
                'author',
                'post_date',
                'list_description',
                'description',
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

    filter_horizontal = ('category',)


admin.site.register(Category, CategoryAdmin)
admin.site.register(Article, ArticleAdmin)