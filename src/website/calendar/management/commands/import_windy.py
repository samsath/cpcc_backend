import json
import requests
from django.conf import settings
from website.calendar.models import Windy, Calendar
from django.conf import settings
from datetime import datetime
from django.core.management.base import BaseCommand
from website.calendar.imports import windyinport


class Command(BaseCommand):
    help = "Imports the wind data and temperature"

    def handle(self, **options):
        r = requests.get('https://windyapp.co/apiV5.php?method=getForecastForLatLonType&type=GFS27&everyHourForecast=1&lon=-0.251224&lat=51.482308')

        if r.status_code == 200:
            data = r.json()
            for forecast in data['response']['forecast']:
                windyinport(forecast)
        else:
            pass