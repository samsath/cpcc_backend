from rest_framework import serializers
from .models import *
from website.accounts.serializers import AccountSerializer
from mediastore.api.serializers import MediaStoreSerializers


class AboutSerialiser(serializers.ModelSerializer):
    image = MediaStoreSerializers(read_only=True)
    gallery = MediaStoreSerializers(read_only=True, many=True)

    class Meta:
        model = About
        fields = '__all__'