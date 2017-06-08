from rest_framework import viewsets
from .models import *
from .serializers import *
import json
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from braces.views import CsrfExemptMixin


class EnquiryView(CsrfExemptMixin, APIView):
    authentication_classes = []

    def post(self, request, format=None):
        json_data = json.loads(request.body.decode("utf-8"))
        print(json_data)
        return Response({'detail':'Works'})