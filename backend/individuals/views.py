from rest_framework import viewsets
from .models import LegalEntity, OurService, Advantage, Assistance, WorkStage, Document
from .serializers import (
    LegalEntitySerializer,
    OurServiceSerializer,
    AdvantageSerializer,
    AssistanceSerializer,
    WorkStageSerializer,
    DocumentSerializer,
)


class LegalEntityViewSet(viewsets.ModelViewSet):
    queryset = LegalEntity.objects.all()
    serializer_class = LegalEntitySerializer


class OurServiceViewSet(viewsets.ModelViewSet):
    queryset = OurService.objects.all()
    serializer_class = OurServiceSerializer


class AdvantageViewSet(viewsets.ModelViewSet):
    queryset = Advantage.objects.all()
    serializer_class = AdvantageSerializer


class AssistanceViewSet(viewsets.ModelViewSet):
    queryset = Assistance.objects.all()
    serializer_class = AssistanceSerializer


class WorkStageViewSet(viewsets.ModelViewSet):
    queryset = WorkStage.objects.all()
    serializer_class = WorkStageSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer






# from rest_framework import viewsets
# from .models import Individual, SuitableService, Advantage, Assistance, WorkStage, Document
# from .serializers import (
#     IndividualSerializer,
#     SuitableServiceSerializer,
#     AdvantageSerializer,
#     AssistanceSerializer,
#     WorkStageSerializer,
#     DocumentSerializer,
# )


# class IndividualViewSet(viewsets.ModelViewSet):
#     queryset = Individual.objects.all()
#     serializer_class = IndividualSerializer


# class SuitableServiceViewSet(viewsets.ModelViewSet):
#     queryset = SuitableService.objects.all()
#     serializer_class = SuitableServiceSerializer


# class AdvantageViewSet(viewsets.ModelViewSet):
#     queryset = Advantage.objects.all()
#     serializer_class = AdvantageSerializer


# class AssistanceViewSet(viewsets.ModelViewSet):
#     queryset = Assistance.objects.all()
#     serializer_class = AssistanceSerializer


# class WorkStageViewSet(viewsets.ModelViewSet):
#     queryset = WorkStage.objects.all()
#     serializer_class = WorkStageSerializer


# class DocumentViewSet(viewsets.ModelViewSet):
#     queryset = Document.objects.all()
#     serializer_class = DocumentSerializer