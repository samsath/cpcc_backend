from rest_framework import serializers
from .models import *
from website.accounts.serialiers import AccountSerializer


class MembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Membership
        fields = '__all__'''