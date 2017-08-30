__author__ = 'sam'
from django.db import models
from datetime import datetime, timedelta, date
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, UserManager, PermissionsMixin, AbstractUser
from django.contrib.auth.models import Group as _Group
from django.contrib.sites.models import Site
from django.core.urlresolvers import reverse
from django.utils import timezone
from django.utils.http import int_to_base36, urlsafe_base64_encode
from django.utils.translation import ugettext_lazy as _
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
import json
from django.template.loader import render_to_string
from django.contrib.contenttypes.models import ContentType
from django.core.mail import EmailMultiAlternatives
import calendar



class User(AbstractBaseUser, PermissionsMixin):
    USERNAME_FIELD = 'username'
    slug = AutoSlugField(unique=True, populate_from=('first_name', 'username',))
    username = models.CharField(_('UserName'), max_length=255, unique=True)
    first_name = models.CharField(_('first name'), max_length=30)
    last_name = models.CharField(_('last name'), max_length=30, blank=True, null=True)
    email = models.EmailField(_('Email'), blank=True, null=True, unique=True)
 
    is_staff = models.BooleanField(_('staff status'), default=False,
                                   help_text=_('Designates whether the user can log into this admin '
                                               'site.'))

    date_joined = models.DateTimeField(_('date joined'), default=timezone.now, null=True, blank=True)
    last_action = models.DateTimeField(_('last action'), default=timezone.now)
    is_active = models.BooleanField(_('Is Active'), default=True)

    objects = UserManager()


    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')
        ordering = ['first_name', 'last_name']

    @models.permalink
    def get_absolute_url(self):
        return ''

    @property
    def avatar_url(self):
        if self.user_avatar:
            return self.user_avatar.name
        return 'placeholder/base-avatar.png'

    def get_full_name(self):
        """
        Returns the first_name plus the last_name, with a space in between.
        """
        if self.first_name and self.last_name:
            full_name = '%s %s' % (self.first_name, self.last_name)
        elif self.first_name:
            full_name = '%s' % (self.first_name,)
        else:
            full_name = '%s' % (self.username, )

        return full_name.strip()

    def get_short_name(self):
        "Returns the short name for the user."
        return self.first_name

    def get_signup_url(self):
        return reverse('signup-profile', kwargs={
            'uidb36': int_to_base36(self.pk),
            'token': self.get_token()
        })


    def __unicode__(self):
        return self.username + " - " + str(self.get_full_name())

