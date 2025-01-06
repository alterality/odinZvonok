from rest_framework import viewsets
from .models import ApartmentServices, HouseServices
from .serializers import ApartmentServicesSerializer, HouseServicesSerializer


class ApartmentServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = ApartmentServices.objects.all()
    serializer_class = ApartmentServicesSerializer


class HouseServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = HouseServices.objects.all()
    serializer_class = HouseServicesSerializer