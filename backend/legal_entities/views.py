from rest_framework import viewsets
from rest_framework import permissions
from .models import (
    IndividualEntity, Service, Advantage, Assistance,
    WorkStage, LegalDocument, IndividualDocument
)
from .serializers import (
    IndividualEntitySerializer, ServiceSerializer, AdvantageSerializer,
    AssistanceSerializer, WorkStageSerializer, LegalDocumentSerializer,
    IndividualDocumentSerializer
)


class IndividualEntityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualEntity.objects.all()
    serializer_class = IndividualEntitySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class AdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class AssistanceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Assistance.objects.all()
    serializer_class = AssistanceSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class WorkStageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = WorkStage.objects.all()
    serializer_class = WorkStageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class LegalDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LegalDocument.objects.all()
    serializer_class = LegalDocumentSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class IndividualDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualDocument.objects.all()
    serializer_class = IndividualDocumentSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]



























# from rest_framework import viewsets
# from .models import (
#     LegalEntity, SuitableService, Advantage, Proposal, WorkStage, LegalDocument, IndividualDocument
# )
# from .serializers import (
#     LegalEntitySerializer, SuitableServiceSerializer, AdvantageSerializer, ProposalSerializer, 
#     WorkStageSerializer, LegalDocumentSerializer, IndividualDocumentSerializer
# )


# class LegalEntityViewSet(viewsets.ModelViewSet):
#     queryset = LegalEntity.objects.all()
#     serializer_class = LegalEntitySerializer


# class SuitableServiceViewSet(viewsets.ModelViewSet):
#     queryset = SuitableService.objects.prefetch_related("points")
#     serializer_class = SuitableServiceSerializer


# class AdvantageViewSet(viewsets.ModelViewSet):
#     queryset = Advantage.objects.all()
#     serializer_class = AdvantageSerializer


# class ProposalViewSet(viewsets.ModelViewSet):
#     queryset = Proposal.objects.all()
#     serializer_class = ProposalSerializer


# class WorkStageViewSet(viewsets.ModelViewSet):
#     queryset = WorkStage.objects.all()
#     serializer_class = WorkStageSerializer


# class LegalDocumentViewSet(viewsets.ModelViewSet):
#     queryset = LegalDocument.objects.all()
#     serializer_class = LegalDocumentSerializer


# class IndividualDocumentViewSet(viewsets.ModelViewSet):
#     queryset = IndividualDocument.objects.all()
#     serializer_class = IndividualDocumentSerializer
