from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ApplicationViewSet, BusinessApplicationViewSet


router = DefaultRouter()

urlpatterns = [
    path('application/', ApplicationViewSet.as_view({'post': 'create'}), name='application'),
    path('business-application/', BusinessApplicationViewSet.as_view({'post': 'create'}), name='business-application'),
]