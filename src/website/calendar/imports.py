from .models import *
from datetime import datetime
from django.contrib.gis.geos import GEOSGeometry


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