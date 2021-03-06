from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer
from mediastore.api.serializers import MediaStoreSerializers
import math


class WindySerializer(serializers.ModelSerializer):
    hour = serializers.SerializerMethodField()
    rain = serializers.SerializerMethodField()

    class Meta:
        model = Windy
        fields = (
            'hour',
            'direction',
            'speed',
            'celsius',
            'water_celsius',
            'cloud_base',
            'rain',
        )

    def get_hour(self, obj):
        try:
            return obj.time.hour
        except:
            return 0

    def get_rain(self, obj):
        try:
            if obj.prate == 0:
                return ''
            return math.ceil(obj.prate)
        except:
            return ''



class CalendarBasicSerializer(serializers.ModelSerializer):
    tide = serializers.SerializerMethodField()

    class Meta:
        model = Calendar
        fields = '__all__'

    def get_tide(self, obj):
        return obj.tide


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
    map = MediaStoreSerializers(read_only=True)
    main_image = MediaStoreSerializers(read_only=True)
    gallery = MediaStoreSerializers(read_only=True, many=True)
    documents = MediaStoreSerializers(read_only=True, many=True)
    day = CalendarBasicSerializer(read_only=True)

    class Meta:
        model = Trips
        fields = '__all__'


class CalendarTripSerializer(serializers.ModelSerializer):
    extrafields_set = TripExtraSerializer(many=True, read_only=True)

    class Meta:
        model = Trips
        exclude = ('day',)


class CalendarEventSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)
    map = MediaStoreSerializers(read_only=True)
    main_image = MediaStoreSerializers(read_only=True)
    gallery = MediaStoreSerializers(read_only=True, many=True)

    class Meta:
        model = Event
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


class PlaEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaEvent
        exclude = ('calendar',)


class CalendarSerializer(serializers.ModelSerializer):
    tide = serializers.SerializerMethodField()
    event_set = CalendarEventSerializer(many=True, read_only=True)
    weather = WeatherTypeSerializer(read_only=True)
    trips_set = CalendarTripSerializer(read_only=True, many=True)
    plaevent_set = PlaEventSerializer(read_only=True, many=True)
    windy_set = WindySerializer(read_only=True, many=True)

    class Meta:
        model = Calendar
        fields = '__all__'

    def get_tide(self, obj):
        try:
            return obj.tide
        except:
            return []

