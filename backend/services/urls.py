from rest_framework.routers import DefaultRouter
from .views import ApartmentServicesVeiwSet, HouseServicesVeiwSet

router = DefaultRouter()
router.register(r'apartment-services', ApartmentServicesVeiwSet)
router.register(r'house-services', HouseServicesVeiwSet)

urlpatterns = router.urls