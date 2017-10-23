from website.base.models import Base
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from mediastore.fields import MediaField, MultipleMediaField


def galleryCount():
    try:
        return Gallery.objects.count()
    except:
        return 0


class Gallery(Base):
    list_description = models.CharField(_('List Description'), max_length=255, blank=True, null=True)
    description = models.TextField(_('Description'), blank=True, null=True)
    sort_value = models.IntegerField(_('Sort Value'), default=galleryCount())
    main_image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='gallery_main_image')
    gallery = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model': 'image'},
                                 related_name='gallery_gallery')

    class Meta:
        verbose_name = 'Gallery'
        verbose_name_plural = 'Galleries'
        ordering = ['-sort_value', ]

    def url(self):
        return None
        #return reverse('articles',kwargs={'slug':self.slug})
