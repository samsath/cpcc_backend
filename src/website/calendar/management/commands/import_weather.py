import json
import requests
from django.conf import settings
from website.calendar.models import WeatherTypes, Calendar
from django.conf import settings
from datetime import datetime
from django.core.management.base import BaseCommand


class Command(BaseCommand):
    help = "Import the weathre information"

    def handle(self, **options):
        params = {
            'key':settings.APIXU_KEY,
            'q':settings.APIXU_LOCATION,
            'days':settings.APIXU_DAYS
        }
        r = requests.get('https://{0}'.format(settings.APIXU_URL), params=params)

        if r.status_code == 200:
            data = r.json()
            for day in data['forecast']['forecastday']:
                try:
                    date = datetime.strptime(day['date'], '%Y-%m-%d').timestamp()
                    sun_rise = datetime.strptime(day['astro']['sunrise'], '%I:%M %p').time()
                    sun_set = datetime.strptime(day['astro']['sunset'], '%I:%M %p').time()
                    temp = day['day']['avgtemp_c']
                    weath, creat = WeatherTypes.objects.get_or_create(title=day['day']['condition']['text'], class_code=day['day']['condition']['code'])
                    Calendar.data.addWeather(int(date),sun_rise, sun_set, temp, weath)
                except Exception as exp:
                    print(exp)
        else:
            print(r.status_code)
