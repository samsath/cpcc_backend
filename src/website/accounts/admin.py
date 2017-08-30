from django.utils.translation import ugettext_lazy as _
from django.contrib import admin
from django.template.response import TemplateResponse
from django.conf.urls import url
from .models import *
from django.shortcuts import render
from .form import UploadForm
from .admin_forms import (UserCreationForm, UserChangeForm,
                          AdminPasswordChangeForm)
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.db import transaction
from django.http import HttpResponseRedirect, Http404
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from django.utils.decorators import method_decorator
from django.utils.translation import ugettext, ugettext_lazy as _
from django.contrib import messages
from django.contrib.auth import update_session_auth_hash
from django.utils.html import escape
from django.contrib.admin.options import IS_POPUP_VAR
from django.conf import settings
from django.contrib.auth.admin import UserAdmin
import re


csrf_protect_m = method_decorator(csrf_protect)
sensitive_post_parameters_m = method_decorator(sensitive_post_parameters())


class NewUserAdmin(UserAdmin):
    add_form_template = 'admin/auth/user/add_form.html'
    change_user_password_template = None
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'email',)}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser',
                                       'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
    )
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff',)
    list_filter = ('is_staff', 'is_superuser', 'is_active', 'groups')
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)
    filter_horizontal = ('groups', 'user_permissions',)


class UserGroupAdmin(admin.ModelAdmin):
    list_display = ('title',)
    filter_horizontal = ('controller','partner',)
    fieldsets = (
        (_('General Information'), {
            'classes':('wide',),
            'fields':(
                'title',
                'avatar',
                'question_set',
            ),
        }),
        (_('People'), {
            'classes':('wide',),
            'fields':(
                'controller',
                'partner',
            )
        })
    )


admin.site.register(User, NewUserAdmin)