import json
import requests
from django.conf import settings
from django.core.management.base import BaseCommand
from ...imports import plaimport


class Command(BaseCommand):
    help = "Import the pla events"

    def handle(self, **options):
        r = requests.get("http://services.pla.co.uk:4444/api/events")
        if r.status_code == 200:
            for item in r.json():
                try:
                    plaimport(item)
                except Exception as exp:
                    print(exp)
        else:
            print(r.status_code)
