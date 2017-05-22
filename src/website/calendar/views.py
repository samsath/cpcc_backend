from .models import Calendar
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, throttle_classes


@api_view(['GET'])
def yearData(request,year ):
    dates = Calendar.objects.filter(date__year=year)
    return Response(CalendarSerializer(instance=dates, many=True).data)


@api_view(['GET'])
def monthData(request, year, month):
    dates = Calendar.objects.filter(date__year=year, date__month=month)
    return Response(CalendarSerializer(instance=dates, many=True).data)


@api_view(['GET'])
def dayData(request, year, month, day):
    dates = Calendar.objects.filter(date__year=year,
                                    date__month=month,
                                    date__day=day)
    return Response(CalendarSerializer(instance=dates, many=True).data)