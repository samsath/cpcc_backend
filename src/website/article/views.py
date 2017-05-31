from rest_framework import viewsets
from .models import *
from django.shortcuts import get_object_or_404
from .serializers import *
from rest_framework.response import Response


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.public.all()
    serializer_class = ArticleSerialiers

    def retrieve(self, request, pk=None):
        queryset = Article.objects.all()
        article = get_object_or_404(queryset, slug=pk)
        serializer = ArticleSerialiers(article)
        return Response(serializer.data)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.public.all()
    serializer_class = CategorySerialiers

#todo need to sort of the permissions and the posting of data.