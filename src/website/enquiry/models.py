from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)


class Enquiry(models.Model):
    email = models.EmailField()
    first_name = models.CharField(_('First Name'), max_length=255)
    last_name = models.CharField(_('Last Name'), max_length=255)
    message = models.TextField(_('Message'))
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def get_full_name(self):
        return "{0} {1}".format(self.first_name, self.last_name)

    def __unicode__(self):
        return self.email

    class Meta:
        verbose_name = 'Enquiry'
        verbose_name_plural = 'Enquiries'
        ordering = ['created', ]