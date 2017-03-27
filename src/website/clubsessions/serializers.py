from rest_framework import serializers
from .models import *


class SessionSerializer(serializers.ModelSerializer):
    nextsession = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = '__all__'

    def get_nextsession(self, obj):
        return obj.get_next_session()