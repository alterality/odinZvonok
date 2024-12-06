from rest_framework import viewsets
from .models import LegalEntity, OurService, IndividualAdvantage, IndividualAssistance, IndividualWorkStage, Document
from rest_framework import permissions
from .serializers import (
    LegalEntitySerializer,
    OurServiceSerializer,
    IndividualAdvantageSerializer,
    IndividualAssistanceSerializer,
    IndividualWorkStageSerializer,
    DocumentSerializer,
)


class LegalEntityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LegalEntity.objects.all()
    serializer_class = LegalEntitySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class OurServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = OurService.objects.all()
    serializer_class = OurServiceSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class IndividualAdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualAdvantage.objects.all()
    serializer_class = IndividualAdvantageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class IndividualAssistanceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualAssistance.objects.all()
    serializer_class = IndividualAssistanceSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class IndividualWorkStageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = IndividualWorkStage.objects.all()
    serializer_class = IndividualWorkStageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]


class DocumentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]






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