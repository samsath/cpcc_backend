from rest_framework import viewsets
from .models import *
from .serializers import *


class MembershipView(viewsets.ReadOnlyModelViewSet):
    queryset = Membership.public.all()
    serializer_class = MembershipSerializer