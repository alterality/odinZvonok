from rest_framework import serializers
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages,
)

class ApartmentListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentListOfServices
        fields = "__all__"

class ApartmentListOfAdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentListOfAdvantages
        fields = "__all__"


class ApartmentServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = ApartmentListOfServicesSerializer(instance.services.all(), many=True).data
        representation['advantages'] = ApartmentListOfAdvantagesSerializer(instance.advantages.all(), many=True).data
        
        return representation
    

class HouseListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseListOfServices
        fields = "__all__"

class HouseListOfAdvantagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseListOfAdvantages
        fields = "__all__"


class HouseServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = HouseServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = HouseListOfServicesSerializer(instance.services.all(), many=True).data
        representation['advantages'] = HouseListOfAdvantagesSerializer(instance.advantages.all(), many=True).data
        
        return representation
