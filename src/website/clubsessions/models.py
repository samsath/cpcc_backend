from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse


def sessionCount():
    try:
        return Session.objects.count()
    except:
        return 0


class Session(Base):
    DAY_OF_WEEK = (
        (0,_('Monday')),
        (1,_('Tuesday')),
        (2,_('Wednesday')),
        (3,_('Thursday')),
        (4,_('Friday')),
        (5,_('Saturday')),
        (6,_('Sunday')),
    )
    description = models.TextField(_('Description'), blank=True, null=True)
    cost = models.TextField(_('Cost'), blank=True, null=True )
    day_of_week = models.CharField(_('Day of Week'), max_length=10, choices=DAY_OF_WEEK)
    sort_value = models.IntegerField(_('Sort Value'), default=sessionCount())

    class Meta:
        verbose_name = 'Session'
        verbose_name_plural = 'Sessions'
        ordering = ['sort_value', ]

    def url(self):
        return None
        # return reverse('articles',kwargs={'slug':self.slug})
    
    def get_next_session(self):
        '''
        This will get the next active session for this day.
        :return: 
        '''
        return None