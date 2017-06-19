from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from mediastore.fields import MediaField

def membershipCount():
    try:
        return Membership.objects.count()
    except:
        return 0


class Membership(Base):
    tagline = models.CharField(_('Tag line'), max_length=255, blank=True, null=True)
    description = models.TextField(_('Description'))
    from_date = models.DateField(_('From'),blank=True, null=True)
    end_date = models.DateField(_('End'), blank=True, null=True)
    cost = models.CharField(_('Cost'), max_length=255, blank=True, null=True)
    sort_value = models.IntegerField(_('Sort Value'), default=membershipCount())
    download = MediaField(blank=True, null=True, limit_choices_to={'content_type__model':'download'}, related_name='membership_download')

    class Meta:
        verbose_name = 'Membership'
        verbose_name_plural = 'Memberships'
        ordering = ['from_date', 'sort_value',]

    def url(self):
        return None
        #return reverse('articles',kwargs={'slug':self.slug})