from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import AboutCompanyViewSet
from . import views

router = DefaultRouter()
router.register('', AboutCompanyViewSet)


urlpatterns = [
    path('aboutcompany', include(router.urls)),
]