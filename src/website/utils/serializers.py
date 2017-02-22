__author__ = 'sam'
from rest_framework import serializers
from flatblocks.models import FlatBlock


class FlatBlockSerializers(serializers.ModelSerializer):
    class Meta:
        model = FlatBlock
        fields = ('id','slug','header','content')