from website.base.models import Base, PublicManager
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)


class Notification(Base):
    message = models.TextField(_('Message'))
    start = models.DateTimeField(_('Start'))
    end = models.DateTimeField(_('End'))
    author = models.ForeignKey(User, blank=True, null=True)

    class Meta:
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'
        ordering = ['start',]


class Homepage(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    is_public = models.BooleanField(_('Public'), default=False)
    description = models.TextField()
    object = models.Manager()
    public = PublicManager()
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'Homepage'
        verbose_name_plural = 'Homepage'


def menuCount():
    try:
        return Menu.objects.count()
    except:
        return 0


class Menu(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    link = models.CharField(_('link'), max_length=255)
    sort_value = models.IntegerField(_('Sort Value'), default=menuCount())

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'Menu'
        verbose_name_plural = 'Menu'
        ordering = ['sort_value', ]