from rest_framework import viewsets
from .models import *
from .serializers import *


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.public.all()
    serializer_class = ArticleSerialiers


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.public.all()
    serializer_class = CategorySerialiers

#todo need to sort of the permissions and the posting of data.