from rest_framework import viewsets
from .models import *
from .serializers import *
from datetime import datetime, timedelta
from website.calendar.models import *


class SessionView(viewsets.ReadOnlyModelViewSet):
    queryset = Session.public.all()
    serializer_class = SessionSerializer


def nextsession(request):
    now = datetime.today()
    weekday = now.weekday()