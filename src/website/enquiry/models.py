from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from django.core.mail import send_mail
from django.conf import settings

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

    def save(self, *args, **kwargs):
        super(Enquiry, self).save(*args, **kwargs)
        send_mail(
            '[enquiry] From Chiswick Website',
            'From {0} email: {1} \n {2}'.format(self.name, self.email, self.message),
            settings.DEFAULT_FROM_EMAIL,
            ['enquiries@chiswickcanoeclub.co.uk',],
            fail_silently=False,
        )



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