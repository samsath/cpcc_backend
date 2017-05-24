from rest_framework import serializers
from .models import *
from mediastore.api.serializers import MediaStoreSerializers
from website.calendar.serializers import CalendarSerializer


class SessionSerializer(serializers.ModelSerializer):
    nextsession = serializers.SerializerMethodField()
    location = MediaStoreSerializers(read_only=True)

    class Meta:
        model = Session
        fields = (
            'title',
            'description',
            'cost',
            'day_of_week',
            'sort_value',
            'location',
            'created',
            'modified',
            'nextsession',
        )

    def get_nextsession(self, obj):
        ses = obj.get_next_session()
        if ses:
            return CalendarSerializer(instance=ses).data
        return ''