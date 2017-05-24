from rest_framework import viewsets
from .models import *
from .serializers import *
from datetime import datetime, timedelta
from website.calendar.models import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, throttle_classes


class SessionView(viewsets.ReadOnlyModelViewSet):
    queryset = Session.public.all()
    serializer_class = SessionSerializer


@api_view(['GET'])
def nextsession(request):
    sessions = [[x, x.get_next_session().date] for x in Session.public.all()]
    sessions.sort(key=lambda z:z[1])
    if len(sessions) > 0:
        return Response(SessionSerializer(instance=sessions[0][0]).data)