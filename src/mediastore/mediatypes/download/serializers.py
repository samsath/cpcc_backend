from rest_framework import serializers
from .models import *


class DownloadSerializers(serializers.ModelSerializer):
    class Meta:
        model = Download
        fields = '__all__'