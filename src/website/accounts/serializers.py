from rest_framework import serializers
from .models import *


class AccountSerializer(serializers.ModelSerializer):
    fullname = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            'pk',
            'username',
            'first_name',
            'last_name',
            'email',
            'fullname',
        )

    def get_fullname(self,obj):
        return obj.get_full_name()