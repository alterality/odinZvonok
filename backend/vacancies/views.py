from rest_framework import viewsets
from rest_framework import permissions
from .models import PartnershipProgram, Vacancy, Details
from .serializers import PartnershipProgramSerializer, VacancySerializer, DetailsSerializer


class PartnershipProgramViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = PartnershipProgram.objects.all()
    serializer_class = PartnershipProgramSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class VacancyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class DetailsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Details.objects.all()
    serializer_class = DetailsSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
