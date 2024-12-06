from rest_framework import viewsets
from .models import PartnershipProgram, Vacancy, Details
from .serializers import PartnershipProgramSerializer, VacancySerializer, DetailsSerializer


class PartnershipProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PartnershipProgram.objects.all()
    serializer_class = PartnershipProgramSerializer


class VacancyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer


class DetailsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Details.objects.all()
    serializer_class = DetailsSerializer
