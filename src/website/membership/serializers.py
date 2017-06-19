from rest_framework import serializers
from mediastore.api.serializers import MediaStoreSerializers
from .models import *


class MembershipSerializer(serializers.ModelSerializer):
    download = MediaStoreSerializers(read_only=True)
    class Meta:
        model = Membership
        fields = '__all__'''