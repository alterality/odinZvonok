from rest_framework import viewsets
from .models import ApartmentServices, HouseServices, BusinessServices, InformationAdditionalServices, Climbers, Cleaning, CargoTransportation, MinorRepairs, CapRepairsInformation
from .serializers import ApartmentServicesSerializer, HouseServicesSerializer, BusinessServicesSerializer, InformationAdditionalServicesSerializer, ClimbersSerializer, CleaningSerializer, CargoTransportationSerializer, MinorRepairsSerializer, CapRepairsInformationSerializer


class ApartmentServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = ApartmentServices.objects.all()
    serializer_class = ApartmentServicesSerializer


class HouseServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = HouseServices.objects.all()
    serializer_class = HouseServicesSerializer


class BusinessServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = BusinessServices.objects.all()
    serializer_class = BusinessServicesSerializer


class InformationAdditionalServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = InformationAdditionalServices.objects.all()
    serializer_class = InformationAdditionalServicesSerializer


class ClimbersVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = Climbers.objects.all()
    serializer_class = ClimbersSerializer


class CleaningVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = Cleaning.objects.all()
    serializer_class = CleaningSerializer


class CargoTransportationVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = CargoTransportation.objects.all()
    serializer_class = CargoTransportationSerializer


class MinorRepairsVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = MinorRepairs.objects.all()
    serializer_class = MinorRepairsSerializer


class CapRepairsInformationVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = CapRepairsInformation.objects.all()
    serializer_class = CapRepairsInformationSerializer