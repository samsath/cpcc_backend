from rest_framework import viewsets
from .models import *
from .serializers import *


class AboutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = About.public.all()
    serializer_class = AboutSerialiser