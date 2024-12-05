from rest_framework import viewsets
from .models import AboutCompany, TeamMember, ClientPartner
from .serializers import AboutCompanySerializer, TeamMemberSerializer, ClientPartnerSerializer
from rest_framework import permissions


class AboutCompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = AboutCompany.objects.all()
    serializer_class = AboutCompanySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class TeamMemberViewSet(viewsets.ModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    permission_classes = [permissions.IsAdminUser]


class ClientPartnerViewSet(viewsets.ModelViewSet):
    queryset = ClientPartner.objects.all()
    serializer_class = ClientPartnerSerializer
    permission_classes = [permissions.IsAdminUser]
