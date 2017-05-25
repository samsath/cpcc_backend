from website.base.models import Base
from website.accounts.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.urlresolvers import reverse
from mediastore.fields import MediaField, MultipleMediaField
from website.calendar.models import Calendar
from datetime import datetime, timedelta


def sessionCount():
    try:
        return Session.objects.count()
    except:
        return 0


class Session(Base):
    DAY_OF_WEEK = (
        ('0',_('Monday')),
        ('1',_('Tuesday')),
        ('2',_('Wednesday')),
        ('3',_('Thursday')),
        ('4',_('Friday')),
        ('5',_('Saturday')),
        ('6',_('Sunday')),
    )
    description = models.TextField(_('Description'), blank=True, null=True)
    list_description = models.CharField(_('List Description'), blank=True, null=True, max_length=255)
    cost = models.TextField(_('Cost'), blank=True, null=True )
    day_of_week = models.CharField(_('Day of Week'), max_length=10, choices=DAY_OF_WEEK)
    sort_value = models.IntegerField(_('Sort Value'), default=sessionCount())
    location = MediaField(blank=True, null=True, limit_choices_to={'content_type__model':'map'}, related_name='session_map')
    club = models.BooleanField(_('At Club'), default=False)

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
        def getnext(date, day):
            event = None
            while event is None:
                date = date + timedelta(days=1)
                if date.weekday() == int(day):
                    cal = Calendar.objects.get(date=date)
                    if cal.free:
                        event = cal
            return event

        return getnext(datetime.today(), self.day_of_week)