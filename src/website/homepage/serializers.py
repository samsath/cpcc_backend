from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer
from mediastore.api.serializers import MediaStoreSerializers


class NotificationSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Notification
        fields = '__all__'


class HomepageSerializer(serializers.ModelSerializer):
    main_image = MediaStoreSerializers(read_only=True)

    class Meta:
        model = Homepage
        fields = '__all__'


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'


class PageImagesSerializer(serializers.ModelSerializer):
    main_image = MediaStoreSerializers(read_only=True)

    class Meta:
        model = PageImages
        fields = '__all__'