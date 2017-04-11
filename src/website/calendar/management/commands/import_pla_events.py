import json
import urllib.request
from django.conf import settings
from django.core.management.base import NoArgsCommand
from ...imports import plaimport


class Command(NoArgsCommand):
    help = "Import the pla events"

    def handle_noargs(self, **options):
        urlData = "http://services.pla.co.uk:4444/api/events"
        webURL = urllib.request.urlopen(urlData)
        data = webURL.read()
        encoding = webURL.info().get_content_charset('utf-8')
        jsonobject = json.loads(data.decode(encoding))
        for item in jsonobject:
            plaimport(item)