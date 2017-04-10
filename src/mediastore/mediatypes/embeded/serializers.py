from rest_framework import serializers
from .models import *


class EmbededSerializers(serializers.ModelSerializer):
    class Meta:
        model = Embeded
        fields = '__all__'