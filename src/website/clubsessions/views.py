from rest_framework import viewsets
from .models import *
from .serializers import *


class SessionView(viewsets.ReadOnlyModelViewSet):
    queryset = Session.public.all()
    serializer_class = SessionSerializer