from rest_framework import serializers
from .models import *
from website.accounts.serialiers import AccountSerializer


class NewsletterSerializers(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True)

    class Meta:
        model = Newsletter
        fields = '__all__'