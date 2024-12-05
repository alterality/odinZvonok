from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AboutCompanyViewSet, TeamMemberViewSet, ClientPartnerViewSet

router = DefaultRouter()
router.register('aboutcompany', AboutCompanyViewSet, basename='aboutcompany')
router.register('team', TeamMemberViewSet, basename='team')
router.register('clients', ClientPartnerViewSet, basename='clients')

urlpatterns = [
    path('', include(router.urls)),
]