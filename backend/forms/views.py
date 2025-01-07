from django.utils import timezone
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .serializers import ApplicationSerializer, BusinessApplicationSerializer
from .models import Application, BusinessApplication
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from .tasks import send_application, send_bsiness_application



class ApplicationViewSet(ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    @csrf_exempt
    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @csrf_exempt
    def perform_create(self, serializer):
        application = serializer.save()
        serializer.save()

        send_application.delay(application.id)


class BusinessApplicationViewSet(ModelViewSet):
    queryset = BusinessApplication.objects.all()
    serializer_class = BusinessApplicationSerializer

    @csrf_exempt
    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    @csrf_exempt
    def perform_create(self, serializer):
        application = serializer.save()
        serializer.save()

        send_bsiness_application.delay(application.id)