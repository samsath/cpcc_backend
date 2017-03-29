from rest_framework import viewsets
from .models import *
from .serializers import *


class FaqViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Faq.public.all()
    serializers_class = FaqSerializer
