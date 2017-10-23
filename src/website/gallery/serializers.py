from rest_framework import serializers
from .models import *
from mediastore.api.serializers import MediaStoreSerializers


class GallerySerilaiser(serializers.ModelSerializer):
    main_image = MediaStoreSerializers(read_only=True)
    gallery = MediaStoreSerializers(read_only=True, many=True)
    next = serializers.SerializerMethodField()
    prev = serializers.SerializerMethodField()

    class Meta:
        model = Gallery
        fields = '__all__'

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