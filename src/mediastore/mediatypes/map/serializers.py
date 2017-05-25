from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import *


class MapSerialiers(serializers.ModelSerializer):
    centre = serializers.SerializerMethodField()
    path = serializers.SerializerMethodField()

    class Meta:
        model = Map
        fields = (
            'id',
            'name',
            'description',
            'slug',
            'content_type',
            'created',
            'centre',
            'path',
            )

    def get_centre(self, obj):
        return obj.getcentre()

    def get_path(self, obj):
        return obj.getpath()
