from rest_framework import serializers
from .models import LegalEntity, OurService, IndividualAdvantage, IndividualAssistance, IndividualWorkStage, Document


class LegalEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalEntity
        fields = '__all__'


class OurServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurService
        fields = '__all__'


class IndividualAdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualAdvantage
        fields = '__all__'


class IndividualAssistanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualAssistance
        fields = '__all__'


class IndividualWorkStageSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualWorkStage
        fields = '__all__'


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = '__all__'






# from rest_framework import serializers
# from .models import Individual, SuitableService, Advantage, Assistance, WorkStage, Document


# class IndividualSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Individual
#         fields = '__all__'


# class SuitableServiceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SuitableService
#         fields = '__all__'

# # 
# class AdvantageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Advantage
#         fields = '__all__'


# class AssistanceSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Assistance
#         fields = '__all__'


# class WorkStageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = WorkStage
#         fields = '__all__'

# class DocumentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Document
#         fields = '__all__' 