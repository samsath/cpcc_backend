from .models import *
from datetime import datetime, timedelta
from django.contrib.gis.geos import GEOSGeometry
from PyPDF2 import PdfFileReader
import re
import numpy as np



def plaimport(jo):
    pla, created = PlaEvent.objects.get_or_create(eventid=jo['EventID'], title=jo['EventName'])
    if not created:
        pla.status_name = jo['StatusName']
        pla.status_description = jo['StatusDescription']
    else:
        if jo['StatusName']:
            pla.status_name = jo['StatusName']
        if jo['StatusDescription']:
            pla.status_description = jo['StatusDescription']
        if jo['EventDescription']:
            pla.description = jo['EventDescription']
        if jo['EventClubName']:
            pla.club_name = jo['EventClubName']
        if jo['EventClubLatitude']:
            pla.club_location = GEOSGeometry('POINT('+jo['EventClubLatitude']+' '+jo['EventClubLongitude']+')')
        if jo['EventFromName']:
            pla.from_name = jo['EventFromName']
        if jo['EventFromLatitude']:
            pla.from_location = GEOSGeometry('POINT('+jo['EventFromLatitude']+' '+jo['EventFromLongitude']+')')
        if jo['EventFromDescription']:
            pla.from_description = jo['EventFromDescription']
        if jo['EventDate']:
            pla.from_date = datetime.strptime(jo['EventDate'][:19], "%Y-%m-%dT%H:%M:%S").date()
        if jo['EventFromTime']:
            pla.from_time = datetime.strptime(jo['EventFromTime'], "%H:%M:%S").time()
        if jo['EventToName']:
            pla.to_name = jo['EventToName']
        if jo['EventToLatitude']:
            pla.to_location = GEOSGeometry('POINT('+jo['EventToLatitude']+' '+jo['EventToLongitude']+')')
        if jo['EventToDescription']:
            pla.to_description = jo['EventToDescription']
        if jo['EventDate']:
            pla.to_date = datetime.strptime(jo['EventDate'][:19], "%Y-%m-%dT%H:%M:%S").date()
        if jo['EventToTime']:
            pla.to_time = datetime.strptime(jo['EventToTime'], "%H:%M:%S").time()
        if jo['EventIsClosure']:
            pla.river_closure = jo['EventIsClosure']
        if jo['EventLink']:
            pla.link = jo['EventLink']
        if jo['categoryName']:
            pla.group_type = jo['categoryName']
        if jo['DistrictName1']:
            pla.district_name_one = jo['DistrictName1']
        if jo['DistrictDescription1']:
            pla.district_description_one = jo['DistrictDescription1']
        if jo['DistrictName2']:
            pla.district_name_two = jo['DistrictName2']
        if jo['DistrictDescription2']:
            pla.district_description_two = jo['DistrictDescription2']
        if jo['DistrictName3']:
            pla.district_name_three = jo['DistrictName3']
        if jo['DistrictDescription3']:
            pla.district_description_three = jo['DistrictDescription3']
    pla.save()


def yeargenerator(year):
    '''
    This generates the date for every day in a year
    :param year: 
    :return: 
    '''
    start = datetime(year=year, month=1, day=1)
    end = datetime(year=year, month=12, day=31)
    span = end - start
    for i in range(span.days + 1):
        yield (start + timedelta(days=i)).date()


def calendarStartEndTide(Tideobject):
    '''
    Added the start and end tide level to the calendar 
    :param Tideobject: TideData object
    :return: Added the start and end tide level to the calendar
    '''
    raw = Tideobject.converted
    year = datetime.fromtimestamp(raw[0][0]).date().year
    time, level = zip(*raw)
    for i in yeargenerator(year):
        start = datetime(year=i.year, month=i.month,day=i.day,hour=0,minute=0, second=0).timestamp()
        end = datetime(year=i.year, month=i.month,day=i.day,hour=23,minute=59, second=59).timestamp()
        Calendar.data.addTide(start, np.interp(start, time, level))
        Calendar.data.addTide(end, np.interp(end, time, level))


def calendarinput(Tideobject):
    '''
    This converts the uploaded pdf into a correct format and adds it to the calendar
    :param Tideobject: TideData object
    :return: Calendar populated with tide information
    '''
    raw_pdf = Tideobject.file.path
    input1 = PdfFileReader(open(raw_pdf, "rb"))

    re_date = re.compile(r'(\w+ \d+ \w+)+')
    re_time = re.compile(r'(\d+:\d+)+')
    re_mesurements = re.compile(r'(\d+\.\d)+')

    tides_times = []
    tides_levels = []
    tides_combined = []

    for page in input1.pages:
        page_data = page.extractText()
        date = None
        for item in page_data.split('\n'):
            if re_date.match(item):
                date = datetime.strptime(item.replace(' ', '') + '2017', '%a%d%b%Y')
            if re_time.match(item):
                time = datetime.strptime(item, '%H:%M').time()
                date_item = datetime.combine(date, time)
                tides_times.append(date_item.timestamp())
            if re_mesurements.match(item):
                tides_levels.append(float(item))

    for tide, level in zip(tides_times, tides_levels):
        Calendar.data.addTide(int(tide), level)
        tides_combined.append([tide, level])

    Tideobject.converted = tides_combined
    Tideobject.inputted = True
    Tideobject.save()