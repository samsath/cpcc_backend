from .models import Calendar, Trips
from .serializers import *
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import api_view, throttle_classes
from django.shortcuts import get_object_or_404


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


class TripViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Trips.public.all()
    serializer_class = TripSerializer

    def retrieve(self, request, pk=None):
        queryset = Trips.public.all()
        trip = get_object_or_404(queryset, slug=pk)
        serializer = TripSerializer(trip)
        return Response(serializer.data)