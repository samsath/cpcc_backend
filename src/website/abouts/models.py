from website.base.models import Base
from django.db import models
from mediastore.fields import MediaField, MultipleMediaField
from django.utils.translation import ugettext_lazy as _


class About(Base):
    description = models.TextField(_('Description'), blank=True, null=True)
    image = MediaField(blank=True, null=True, limit_choices_to={'content_type__model': 'image'},
                            related_name='about_main_image')
    gallery = MultipleMediaField(blank=True, null=True, sorted=True, limit_choices_to={'content_type__model': 'image'},
                                 related_name='about_gallery')

    class Meta:
        verbose_name = 'About'
        verbose_name_plural = 'Abouts'
        ordering = ['created',]