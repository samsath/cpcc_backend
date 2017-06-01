from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer
from mediastore.api.serializers import MediaStoreSerializers


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
    main_image = MediaStoreSerializers(read_only=True)
    gallery = MediaStoreSerializers(read_only=True, many=True)
    next = serializers.SerializerMethodField()
    prev = serializers.SerializerMethodField()

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
            'main_image',
            'gallery',
            'slug',
            'prev',
            'next'
        )

    def get_next(self, obj):
        try:
            return obj.get_next().slug
        except:
            return ""

    def get_prev(self, obj):
        try:
            return obj.get_prev().slug
        except:
            return ""