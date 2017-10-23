from rest_framework import viewsets
from .models import *
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework.response import Response


class GalleryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerilaiser

    def retrieve(self, request, pk=None):
        gallery = get_object_or_404(self.queryset, slug=pk)
        serializer = self.serializer_class(gallery)
        return Response(serializer.data)

