from rest_framework import viewsets
from .models import *
from .serializers import *


class NotificationView(viewsets.ReadOnlyModelViewSet):
    queryset = Notification.public.all()
    serializer_class = NotificationSerializer


class HomePageView(viewsets.ReadOnlyModelViewSet):
    queryset = Homepage.public.all()
    serializer_class = HomepageSerializer


class MenuViews(viewsets.ReadOnlyModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class PageImageView(viewsets.ReadOnlyModelViewSet):
    queryset = PageImages.objects.all().order_by('?')
    serializer_class = PageImagesSerializer