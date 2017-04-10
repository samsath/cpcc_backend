from ..models import *
from .serializers import MediaStoreSerializers
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class MediaList(APIView):
    def get(self, request, format=None):
        media = Media.objects.all()
        serializer = MediaStoreSerializers(media, many=True)
        return Response(serializer.data)


class MediaDetail(APIView):
    def get_object(self, slug):
        try:
            return Media.objects.get(slug__iexact=slug)
        except Media.DoesNotExist:
            return Http404

    def get(self, request, slug, format=None):
        media = self.get_object(slug)
        serializer = MediaStoreSerializers(media)
        return Response(serializer.data)


medialist = MediaList.as_view()
mediadetial = MediaDetail.as_view()