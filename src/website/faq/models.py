from website.base.models import PublicManager
from django.db import models
from django_extensions.db.fields import (AutoSlugField, CreationDateTimeField, ModificationDateTimeField)
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse


def faqCount():
    try:
        return Faq.objects.count()
    except:
        return 0


class Faq(models.Model):
    question = models.CharField(_('Question'), max_length=255)
    answer = models.TextField(_('Answer'), blank=True,null=True)
    is_public = models.BooleanField(_('Is Public'), default=False)
    slug = AutoSlugField(populate_from=('question',), unique=True, overwrite=True)
    sort_value = models.IntegerField(_('Sort Value'), default=faqCount())
    objects = models.Manager()
    public = PublicManager()
    created = CreationDateTimeField()
    modified = ModificationDateTimeField()

    class Meta:
        verbose_name = 'FAQ'
        verbose_name_plural = 'FAQ'
        ordering = ['-sort_value',]
        permissions = (
            ('can_publish', 'Can publish this item'),
        )

    def url(self):
        return None
        # return reverse('articles',kwargs={'slug':self.slug})

