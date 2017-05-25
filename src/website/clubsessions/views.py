from rest_framework import viewsets
from .models import *
from .serializers import *
from datetime import datetime, timedelta
from website.calendar.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, throttle_classes
from django.http import JsonResponse

class SessionView(viewsets.ReadOnlyModelViewSet):
    queryset = Session.public.all()
    serializer_class = SessionSerializer


@api_view(['GET'])
def nextsession(request):
    sessions = [[x, x.get_next_session().date] for x in Session.public.all()]
    sessions.sort(key=lambda z:z[1])

    try:
        ses = sessions[0][0]
        cal = ses.get_next_session()
        obj = {
            'date':cal.date.strftime('%A %d %B %Y'),
            'club':ses.club,
            'temp':str(cal.temperature),
            'weather':cal.weather.class_code,
            'content':ses.list_description,
            'tide':cal.tide
        }

        return JsonResponse(obj)
    except:
        return ""
