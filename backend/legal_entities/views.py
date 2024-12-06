from rest_framework import viewsets
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


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class AdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer


class AssistanceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Assistance.objects.all()
    serializer_class = AssistanceSerializer


class WorkStageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = WorkStage.objects.all()
    serializer_class = WorkStageSerializer


class LegalDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LegalDocument.objects.all()
    serializer_class = LegalDocumentSerializer


class IndividualDocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualDocument.objects.all()
    serializer_class = IndividualDocumentSerializer



























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
