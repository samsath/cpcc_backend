from rest_framework import viewsets
from .models import *
from .serializers import *
import json
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response
from braces.views import CsrfExemptMixin


def enquirtview(request):
    if request.method == "POST":
        json_data = json.loads(request.body.decode("utf-8"))
        enquir, created = Enquiry.objects.get_or_create(email=json_data['email'],
                                               name=json_data['name'],
                                               message=json_data['comment'])
        enquir.save()
        return JsonResponse({'data':True})
    return JsonResponse({'get':False})


def newsletteradd(request):
    if request.method == "POST":
        json_data = json.loads(request.body.decode("utf-8"))
        newsletter, created = NewsletterSignup.objects.get_or_create(email=json_data['email'],
                                                            name=json_data['name'],
                                                            subscribe=True)
        newsletter.save()
        return JsonResponse({'data':True})
    return JsonResponse({'get':False})