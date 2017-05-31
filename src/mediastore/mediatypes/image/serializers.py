from rest_framework import serializers
from .models import *


class ImageSerializer(serializers.ModelSerializer):
    small = serializers.SerializerMethodField('get_small_crop')
    medium = serializers.SerializerMethodField('get_medium_crop')
    large = serializers.SerializerMethodField('get_large_crop')
    original = serializers.SerializerMethodField('get_original_image')

    class Meta:
        model = Image
        fields = '__all__'

    def get_small_crop(self, img):
        return img.get_small()

    def get_medium_crop(self, img):
        return img.get_medium()

    def get_large_crop(self, img):
        return img.get_large()

    def get_original_image(self, img):
        return img.get_original()