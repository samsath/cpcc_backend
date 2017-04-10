from rest_framework import serializers
from .models import *


class PdfSerializer(serializers.ModelSerializer):
    class Meta:
        model = PDF
        fields = '__all__'