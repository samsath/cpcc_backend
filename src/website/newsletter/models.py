from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse

def newsletterCount():
    try:
        return Newsletter.objects.count()
    except:
        return 0


class Newsletter(Base):
    number = models.CharField(_('Number'), max_length=255)
    postdate = models.DateField(_('Post Date'))
    author = models.ForeignKey(User, blank=True, null=True)
    newsletter = models.TextField(_('Newsletter'))
    sort_value = models.IntegerField(_('Sort Value'), default=newsletterCount())

    class Meta:
        verbose_name = 'Newsletter'
        verbose_name_plural = 'Newsletters'
        ordering = ['postdate','sort_value',]

    def url(self):
        return None
        #return reverse('articles',kwargs={'slug':self.slug})