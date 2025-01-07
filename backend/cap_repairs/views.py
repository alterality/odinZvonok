from rest_framework import viewsets
from .models import (
    CapRepairsTitle,
    FloorWorkCapServices,
    WallWorkCapServices,
    TilingWorkCapServices,
    PlumbingWorkCapServices,
    DismantlingWorkCapServices,
    ElectricalWorkCapServices
)
from .serializers import (
    CapRepairsTitleSerializer,
    FloorWorkCapServicesSerializer,
    WallWorkCapServicesSerializer,
    TilingWorkCapServicesSerializer,
    PlumbingWorkCapServicesSerializer,
    DismantlingWorkCapServicesSerializer,
    ElectricalWorkCapServicesSerializer
)


class CapRepairsTitleVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = CapRepairsTitle.objects.all()
    serializer_class = CapRepairsTitleSerializer


class FloorWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = FloorWorkCapServices.objects.all()
    serializer_class = FloorWorkCapServicesSerializer


class WallWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = WallWorkCapServices.objects.all()
    serializer_class = WallWorkCapServicesSerializer


class TilingWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = TilingWorkCapServices.objects.all()
    serializer_class = TilingWorkCapServicesSerializer


class PlumbingWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = PlumbingWorkCapServices.objects.all()
    serializer_class = PlumbingWorkCapServicesSerializer


class DismantlingWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = DismantlingWorkCapServices.objects.all()
    serializer_class = DismantlingWorkCapServicesSerializer


class ElectricalWorkCapServicesVeiwSet(viewsets.ReadOnlyModelViewSet):
    queryset = ElectricalWorkCapServices.objects.all()
    serializer_class = ElectricalWorkCapServicesSerializer