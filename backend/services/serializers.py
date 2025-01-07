from rest_framework import serializers
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages,
    BusinessServices,
    InformationAdditionalServices,
    Climbers,
    ClimbersListOfServices,
    Cleaning,
    CargoTransportation,
    MinorRepairs,
    Santehnika,
    Elektrika,
    DoorsAndWindows,
    Stena,
    Pol,
    BytTehnika,
    CapRepairsInformation
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
    


class BusinessServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessServices
        fields = "__all__"




class InformationAdditionalServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformationAdditionalServices
        fields = "__all__"




class ClimbersListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClimbersListOfServices
        fields = "__all__"


class ClimbersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Climbers
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = ClimbersListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    



class CleaningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cleaning
        fields = "__all__"




class CargoTransportationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CargoTransportation
        fields = "__all__"









class SantehnikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Santehnika
        fields = "__all__"

class ElektrikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Elektrika
        fields = "__all__"

class DoorsAndWindowsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoorsAndWindows
        fields = "__all__"

class StenaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stena
        fields = "__all__"

class PolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pol
        fields = "__all__"

class BytTehnikaSerializer(serializers.ModelSerializer):
    class Meta:
        model = BytTehnika
        fields = "__all__"

class MinorRepairsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinorRepairs
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['santehnika'] = SantehnikaSerializer(instance.santehnika.all(), many=True).data
        representation['elektrika'] = ElektrikaSerializer(instance.elektrika.all(), many=True).data
        representation['doorsAndWindows'] = DoorsAndWindowsSerializer(instance.doorsAndWindows.all(), many=True).data
        representation['stena'] = StenaSerializer(instance.stena.all(), many=True).data
        representation['pol'] = PolSerializer(instance.pol.all(), many=True).data
        representation['bytTehnika'] = BytTehnikaSerializer(instance.bytTehnika.all(), many=True).data
        
        return representation
    




class CapRepairsInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CapRepairsInformation
        fields = "__all__"