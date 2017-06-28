from website.base.models import Base
from django.db import models
from mediastore.fields import MediaField, MultipleMediaField
from django.utils.translation import ugettext_lazy as _


def aboutCount():
    try:
        return About.objects.count()
    except:
        return 0


class About(Base):
    description = models.TextField(_('Description'), blank=True, null=True)
    image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='about_main_image')
    gallery = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model': 'image'},
                                 related_name='about_gallery')
    sort_value = models.IntegerField(_('Sort Value'), default=aboutCount())


    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'Abouts'
        ordering = ['sort_value','created',]
