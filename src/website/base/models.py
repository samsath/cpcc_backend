__author__ = 'sam'
from django.db import models
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from django.utils.translation import ugettext_lazy as _


class PublicManager(models.Manager):
    def get_queryset(self):
        return super(PublicManager, self).get_queryset().filter(is_public=True)


class FeaturedManager(models.Manager):
    def get_queryset(self):
        return super(FeaturedManager, self).get_queryset().filter(is_public=True, is_featured=True)


class Base(models.Model):
    title = models.CharField(_('Title'), max_length=255)
    is_public = models.BooleanField(_('Is Public'),default=False)
    is_featured = models.BooleanField(_('Is Featured'), default=False)
    slug = AutoSlugField(populate_from=('title',), unique=True, overwrite=True)
    objects = models.Manager()
    public = PublicManager()
    featured = FeaturedManager()
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    class Meta:
        abstract = True

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    def __get_nearby(self, offset):
        if not hasattr(self, '_nearby_objects'):
            qs = type(self).public.all()
            qs = qs.values_list('id', flat=True)
            self._nearby_objects = list(qs)
        if self.pk not in self._nearby_objects:
            return None
        index = self._nearby_objects.index(self.pk)
        if index + offset < 0:
            nearby_id = self._nearby_objects[-1]
        else:
            try:
                nearby_id = self._nearby_objects[index + offset]
            except IndexError:
                nearby_id = self._nearby_objects[0]
        return type(self).objects.get(pk=nearby_id)

    def get_next(self):
        return self.__get_nearby(1)

    def get_prev(self):
        return self.__get_nearby(-1)