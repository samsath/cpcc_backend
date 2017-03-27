from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer


class WeatherTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherTypes
        fields = '__all__'


class TideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tide
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Event
        fields = '__all__'


class TripExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExtraFields
        fields = '__all__'


class TripSerializer(serializers.ModelSerializer):
    extrafields_set = TripExtraSerializer(many=True, read_only=True)

    class Meta:
        model = Trips
        fields = '__all__'


class CalendarTripSerializer(serializers.ModelSerializer):
    extrafields_set = TripExtraSerializer(many=True, read_only=True)

    class Meta:
        model = Trips
        fields = '__all__'
        exclude = ('day',)


class CalendarEventSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Event
        fields = '__all__'
        exclude = ('date', )


class CalendarTideSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tide
        fields = (
            'time',
            'level',
            'created',
            'modified'
        )


class CalendarSerializer(serializers.ModelSerializer):
    tide_set = CalendarTideSerializer(many=True, read_only=True)
    event_set = CalendarEventSerializer(many=True, read_only=True)
    weather = WeatherTypeSerializer(read_only=True)
    trip_set = CalendarTripSerializer(read_only=True, many=True)
    
    class Meta:
        models = Calendar
        fields = '__all__'
