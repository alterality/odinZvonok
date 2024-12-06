from rest_framework import serializers
from .models import (
    IndividualEntity, Service, Advantage, Assistance,
    WorkStage, LegalDocument, IndividualDocument
)


class IndividualEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualEntity
        fields = "__all__"


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = "__all__"


class AdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advantage
        fields = "__all__"


class AssistanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assistance
        fields = "__all__"


class WorkStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkStage
        fields = "__all__"


class LegalDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalDocument
        fields = "__all__"


class IndividualDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualDocument
        fields = "__all__"







# from rest_framework import serializers
# from .models import (
#     LegalEntity, SuitableService, Advantage, Proposal, WorkStage, LegalDocument, IndividualDocument
# )


# class LegalEntitySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = LegalEntity
#         fields = '__all__'


# class SuitableServicePointSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SuitableServicePoint
#         fields = "__all__"


# class SuitableServiceSerializer(serializers.ModelSerializer):
#     points = SuitableServicePointSerializer(many=True, read_only=True)

#     class Meta:
#         model = SuitableService
#         fields = "__all__"


# class AdvantageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Advantage
#         fields = '__all__'


# class ProposalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Proposal
#         fields = '__all__'


# class WorkStageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = WorkStage
#         fields = '__all__'


# class LegalDocumentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = LegalDocument
#         fields = '__all__'


# class IndividualDocumentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = IndividualDocument
#         fields = '__all__'
