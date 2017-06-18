from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)


class Enquiry(models.Model):
    email = models.EmailField()
    name = models.CharField(_('Name'), max_length=255)
    message = models.TextField(_('Message'))
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def get_full_name(self):
        return "{0} {1}".format(self.name)

    def __unicode__(self):
        return self.email

    class Meta:
        verbose_name = 'Enquiry'
        verbose_name_plural = 'Enquiries'
        ordering = ['created', ]


class NewsletterSignup(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=255,blank=True, null=True)
    subscribe = models.NullBooleanField(default=None)
    mailchimp_register = models.BooleanField(default=False)
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return self.email

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = 'Newsletter signup'
        verbose_name_plural = 'Newsletter signup'
        ordering = ['created',]