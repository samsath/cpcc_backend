from rest_framework import viewsets
from .models import *
from .serializers import *


class NewsletterView(viewsets.ReadOnlyModelViewSet):
    queryset = Newsletter.public.all()
    serializer_class = NewsletterSerializers