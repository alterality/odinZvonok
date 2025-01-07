from rest_framework import serializers
from .models import (
    CapRepairsTitle,
    FloorWorkCapServices,
    FloorWorkCapListOfServices,
    WallWorkCapServices,
    WallWorkCapListOfServices,
    TilingWorkCapServices,
    TilingWorkCapListOfServices,
    PlumbingWorkCapServices,
    PlumbingWorkCapListOfServices,
    DismantlingWorkCapServices,
    DismantlingWorkCapListOfServices,
    ElectricalWorkCapServices,
    ElectricalWorkCapListOfServices
)


class CapRepairsTitleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CapRepairsTitle
        fields = "__all__"




class FloorWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FloorWorkCapListOfServices
        fields = "__all__"

class FloorWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = FloorWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = FloorWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    




class WallWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WallWorkCapListOfServices
        fields = "__all__"

class WallWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = WallWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = WallWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    





class TilingWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TilingWorkCapListOfServices
        fields = "__all__"

class TilingWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TilingWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = TilingWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    





class PlumbingWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlumbingWorkCapListOfServices
        fields = "__all__"

class PlumbingWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlumbingWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = PlumbingWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    




class DismantlingWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DismantlingWorkCapListOfServices
        fields = "__all__"

class DismantlingWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DismantlingWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = DismantlingWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation
    





class ElectricalWorkCapListOfServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectricalWorkCapListOfServices
        fields = "__all__"

class ElectricalWorkCapServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ElectricalWorkCapServices
        fields = "__all__"

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        representation['services'] = ElectricalWorkCapListOfServicesSerializer(instance.services.all(), many=True).data
        
        return representation