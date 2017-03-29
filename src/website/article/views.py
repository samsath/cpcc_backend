from rest_framework import viewsets
from .models import *
from .serializers import *


class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.public.all()
    serializers = ArticleSerialiers


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.public.all()
    serializers = CategorySerialiers

#todo need to sort of the permissions and the posting of data.