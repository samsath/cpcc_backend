from website.base.models import Base, PublicManager
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from mediastore.fields import MediaField, MultipleMediaField


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
    objects = models.Manager()
    public = PublicManager()
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()
    main_image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model':'image'}, related_name='homepage_main_image')

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


class PageImages(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    is_public = models.BooleanField(_('Public'), default=False)
    objects = models.Manager()
    public = PublicManager()
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()
    main_image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='pageimage_main_image')

    def __unicode__(self):
        return self.title

    class Meta:
        verbose_name = 'Page Image'
        verbose_name_plural = 'Page Images'