from rest_framework import serializers
from .models import *


class EnquirySerialiers(serializers.ModelSerializer):
    class Meta:
        models = Enquiry
        fields = '__all__'