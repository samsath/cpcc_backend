from django.db.models.signals import post_save
from .imports import calendarinput, calendarStartEndTide
from django.dispatch import receiver
from .models import TideData

@receiver(post_save, sender=TideData)
def importTideData(sender, instance, created, **kwrgs):
    if created:
        calendarinput(instance)
        calendarStartEndTide(instance)

