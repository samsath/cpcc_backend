from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer


class NotificationSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = '__all__'


class HomepageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Homepage
        fields = '__all__'


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        models = Menu
        fields = '__all__'
