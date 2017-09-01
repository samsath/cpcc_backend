from rest_framework import viewsets
from .models import *
from .serializers import *
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Q
from datetime import datetime


class NotificationView(viewsets.ReadOnlyModelViewSet):
    queryset = Notification.public.all()
    serializer_class = NotificationSerializer

    def get_queryset(self):
        now = datetime.datetime.now()
        return Notification.public.filter(
            (Q(start__lte=now) | Q(start__isnull=True))
            &
            (Q(end__gte=now) | Q(end__isnull=True)))


class HomePageView(viewsets.ReadOnlyModelViewSet):
    queryset = Homepage.public.all()
    serializer_class = HomepageSerializer


class MenuViews(viewsets.ReadOnlyModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class PageImageView(viewsets.ReadOnlyModelViewSet):
    queryset = PageImages.objects.all().order_by('?')
    serializer_class = PageImagesSerializer


@api_view(['GET'])
def homepageimage(request):
    return Response(PageImagesSerializer(instance=PageImages.objects.all().order_by('?').first()).data)