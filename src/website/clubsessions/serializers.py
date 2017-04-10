from rest_framework import serializers
from .models import *
from mediastore.api.serializers import MediaStoreSerializers


class SessionSerializer(serializers.ModelSerializer):
    nextsession = serializers.SerializerMethodField()
    location = MediaStoreSerializers(read_only=True)

    class Meta:
        model = Session
        fields = '__all__'

    def get_nextsession(self, obj):
        return obj.get_next_session()