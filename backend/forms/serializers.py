from rest_framework import serializers
from .models import Application, BusinessApplication


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


class BusinessApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessApplication
        fields = '__all__'