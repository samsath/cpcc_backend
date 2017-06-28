from .models import *
from datetime import datetime, timedelta
from django.contrib.gis.geos import GEOSGeometry
from PyPDF2 import PdfFileReader
import re
import numpy as np


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


def dategenerator(start, end):
    '''
    This turns to start and end dates to each date inbetween
    :param start: date object
    :param end: date object
    :return: date object
    '''
    span = end - start
    for i in range(span.days + 1):
        element = (start + timedelta(days=i))
        try:
            yield element.date()
        except:
            yield element


def plaimport(jo):
    pla, created = PlaEvent.objects.get_or_create(eventid=jo['EventID'], title=jo['EventName'])
    if not created:
        pla.status_name = jo['StatusName']
        pla.status_description = jo['StatusDescription']
    else:
        if 'StatusName' in jo:
            pla.status_name = jo['StatusName']
        if 'StatusDescription' in jo:
            pla.status_description = jo['StatusDescription']
        if 'EventDescription' in jo:
            pla.description = jo['EventDescription']
        if 'EventClubName' in jo:
            pla.club_name = jo['EventClubName']
        if 'EventClubLatitude' in jo:
            pla.club_location = GEOSGeometry('POINT('+str(jo['EventClubLatitude'])+' '+str(jo['EventClubLongitude'])+')')
        if 'EventFromName' in jo:
            pla.from_name = jo['EventFromName']
        if 'EventFromLatitude' in jo:
            pla.from_location = GEOSGeometry('POINT('+str(jo['EventFromLatitude'])+' '+str(jo['EventFromLongitude'])+')')
        if 'EventFromDescription' in jo:
            pla.from_description = jo['EventFromDescription']
        if 'EventDate' in jo:
            pla.from_date = datetime.strptime(jo['EventDate'][:19], "%Y-%m-%dT%H:%M:%S").date()
        if 'EventFromTime' in jo:
            pla.from_time = datetime.strptime(jo['EventFromTime'], "%H:%M:%S").time()
        if 'EventToName' in jo:
            pla.to_name = jo['EventToName']
        if 'EventToLatitude' in jo:
            pla.to_location = GEOSGeometry('POINT('+str(jo['EventToLatitude'])+' '+str(jo['EventToLongitude'])+')')
        if 'EventToDescription' in jo:
            pla.to_description = jo['EventToDescription']
        if 'EventToDate' in jo:
            pla.to_date = datetime.strptime(jo['EventToDate'][:19], "%Y-%m-%dT%H:%M:%S").date()
        if 'EventToTime' in jo:
            pla.to_time = datetime.strptime(jo['EventToTime'], "%H:%M:%S").time()
        if 'EventIsClosure' in jo:
            pla.river_closure = jo['EventIsClosure']
        if 'EventLink' in jo:
            pla.link = jo['EventLink']
        if 'categoryName' in jo:
            pla.group_type = jo['categoryName']
        if 'DistrictName1' in jo:
            pla.district_name_one = jo['DistrictName1']
        if 'DistrictDescription1' in jo:
            pla.district_description_one = jo['DistrictDescription1']
        if 'DistrictName2' in jo:
            pla.district_name_two = jo['DistrictName2']
        if 'DistrictDescription2' in jo:
            pla.district_description_two = jo['DistrictDescription2']
        if 'DistrictName3' in jo:
            pla.district_name_three = jo['DistrictName3']
        if 'DistrictDescription3' in jo:
            pla.district_description_three = jo['DistrictDescription3']

        if pla.from_date:
            if pla.to_date:
                for date in dategenerator(pla.from_date, pla.to_date):
                    cal, create = Calendar.objects.get_or_create(date=date)
                    pla.calendar.add(cal)
            else:
                cal, create = Calendar.objects.get_or_create(date=pla.from_date)
                pla.calendar.add(cal)
    pla.save()


def calendarStartEndTide(Tideobject):
    '''
    Added the start and end tide level to the calendar 
    :param Tideobject: TideData object
    :return: Added the start and end tide level to the calendar
    '''
    raw = Tideobject.converted
    year = datetime.fromtimestamp(raw[0][0]).date().year
    time, level = zip(*raw)
    #todo make this time, level be grouped in 30 as it generated a better sample
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