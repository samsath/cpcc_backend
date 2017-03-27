from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer


class CategorySerialiers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'pk',
            'title',
            'is_public',
            'is_featured',
            'sort_value'
        )


class ArticleSerialiers(serializers.ModelSerializer):
    category = CategorySerialiers(read_only=True, many=True)
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Article
        fields = (
            'pk',
            'title',
            'list_description',
            'description',
            'post_date',
            'sort_value',
            'is_public',
            'is_featured',
            'category',
            'author',
        )