from rest_framework import viewsets
from .models import Membership
from .serializers import MembershipSerializer


class MembershipView(viewsets.ReadOnlyModelViewSet):
    queryset = Membership.public.all()
    serializer_class = MembershipSerializer