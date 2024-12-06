from rest_framework import serializers
from .models import PartnershipProgram, Vacancy, Details


class PartnershipProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartnershipProgram
        fields = "__all__"


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"


class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = "__all__"
