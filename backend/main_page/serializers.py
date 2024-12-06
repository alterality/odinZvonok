from rest_framework import serializers
from .models import (
    HomeAboutCompany, HomeAdvantage, HomePage
)


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = "__all__"


class HomeAdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAdvantage
        fields = "__all__"


class HomeAboutCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutCompany
        fields = "__all__"

