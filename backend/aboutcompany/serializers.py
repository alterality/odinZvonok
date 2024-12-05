from rest_framework import serializers
from .models import AboutCompany, TeamMember, ClientPartner


class AboutCompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutCompany
        fields = '__all__'


class TeamMemberSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)  

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'position', 'image', 'created_at']

class ClientPartnerSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(read_only=True)

    class Meta:
        model = ClientPartner
        fields = ['id', 'name', 'image', 'created_at']