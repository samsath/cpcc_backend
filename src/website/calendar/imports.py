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
        if 'EventClubLatitude' in jo and jo['EventClubLatitude'] is not None and jo['EventClubLongitude'] is not None:
            pla.club_location = GEOSGeometry('POINT('+str(jo['EventClubLatitude'])+' '+str(jo['EventClubLongitude'])+')')
        if 'EventFromName' in jo:
            pla.from_name = jo['EventFromName']
        if 'EventFromLatitude' in jo and jo['EventFromLatitude'] is not None and jo['EventFromLongitude'] is not None:
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


def getRange(arr, number, range=50):
    '''
    This converts a large list into a small array that allows us to get a better value
    :param arr: The array
    :param number: The number to find in the in the arr
    :param range: the number either side of the number to get the full amount
    :return: a tuple of the smaller array with the index of the start and end possition.
    '''

    centernum = min(arr,key=lambda x:abs(x-number))
    index = arr.index(centernum)
    count = len(arr)
    start = 0
    last = count
    if index > (start + range):
        start = index - range
    if index < (last - range):
        last = index + (range + 1)
    return (arr[start:last], start, last)


def calendarStartEndTide(Tideobject):
    '''
    Added the start and end tide level to the calendar.
    :param Tideobject: TideData object
    :return: Added the start and end tide level to the calendar
    '''
    raw = Tideobject.converted
    year = datetime.fromtimestamp(raw[0][0]).date().year
    time, level = zip(*raw)
    for i in yeargenerator(year):
        start = datetime(year=i.year, month=i.month, day=i.day, hour=0, minute=0, second=0).timestamp()
        timearray, indexstart, indexfinish = getRange(time, start)
        end = datetime(year=i.year, month=i.month, day=i.day, hour=23, minute=59, second=59).timestamp()
        Calendar.data.addTide(start, np.interp(start, time[indexstart:indexfinish], level[indexstart:indexfinish]))
        Calendar.data.addTide(end, np.interp(end, time[indexstart:indexfinish], level[indexstart:indexfinish]))


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
    year = Tideobject.year
    if not year:
        year = datetime.now().year

    for page in input1.pages:
        page_data = page.extractText()
        date = None
        for item in page_data.split('\n'):
            if re_date.match(item):
                date = datetime.strptime(item.replace(' ', '') + year, '%a%d%b%Y')
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


EPOCH = datetime.fromtimestamp(0)


def timestamp_to_datetime(timestamp, epoch=EPOCH):
    # Ensure we deal with a `datetime`.
    epoch = datetime.fromordinal(epoch.toordinal())

    epoch_difference = timedelta_to_seconds(epoch - EPOCH)
    adjusted_timestamp = timestamp - epoch_difference

    date = datetime.fromtimestamp(adjusted_timestamp)

    return date


def timedelta_to_seconds(delta):
    seconds = (delta.microseconds * 1e6) + delta.seconds + (delta.days * 86400)
    seconds = abs(seconds)

    return seconds


def windyinport(data):
    wind, created = Windy.objects.get_or_create(timestamp=data['timestamp'])
    try:
        date = datetime.strptime(data['date'], '%d.%m.%Y %H:%M')
    except:
        date = timestamp_to_datetime(data['timestamp'])
    calendar, cal_created = Calendar.objects.get_or_create(date=date.date())
    wind.day = calendar
    wind.time = date.time()
    if 'GUST' in data:
        wind.gust = data['GUST']
    if 'UGRD' in data:
        wind.ugrd = data['UGRD']
    if 'VGRD' in data:
        wind.vgrd = data['VGRD']
    if 'TMP' in data:
        wind.tmp = data['TMP']
    if 'PRATE' in data:
        wind.prate = data['PRATE']
    if 'CWAT' in data:
        wind.cwat = data['CWAT']
    if 'TCDC_LOW' in data:
        wind.tcdc_low = data['TCDC_LOW']
    if 'TCDC_MID' in data:
        wind.tcdc_mid = data['TCDC_MID']
    if 'TCDC_HIGH' in data:
        wind.tcdc_high = data['TCDC_HIGH']
    if 'RH' in data:
        wind.rh = data['RH']
    if 'PRES_OLD' in data:
        wind.pres_old = data['PRES_OLD']
    if 'PRES' in data:
        wind.pres = data['PRES']
    if 'DPT' in data:
        wind.dpt = data['DPT']
    if 'CLOUD_BASE' in data:
        wind.cloud_base = data['CLOUD_BASE']
    if 'swellDirection' in data:
        wind.swellDirection = data['swellDirection']
    if 'swellSize' in data:
        wind.swellSize = data['swellSize']
    if 'swellPeriod' in data:
        wind.swellPeriod = data['swellPeriod']
    if 'water_temp' in data:
        wind.water_temp = data['water_temp']
    wind.save()
    if wind.ugrd is not None:
        wind.direction = wind.winddirection()
        wind.speed = math.ceil(wind.windspeed())
    if wind.tmp is not None:
        wind.celsius = math.ceil(wind.getCelsius(wind.tmp))
    if wind.water_temp is not None:
        wind.water_celsius = math.ceil(wind.getCelsius(wind.water_temp))
    wind.save()
