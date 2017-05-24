from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import *


class MapSerialiers(GeoFeatureModelSerializer):
    class Meta:
        model = Map
        geo_field = 'centre'
        fields = (
            'id',
            'name',
            'description',
            'slug',
            'content_type',
            'created',
            'start_name',
            'end_name',
            'start',
            'end',
            'path',
            )