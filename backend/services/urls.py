from rest_framework.routers import DefaultRouter
from .views import ApartmentServicesVeiwSet, HouseServicesVeiwSet, BusinessServicesVeiwSet, InformationAdditionalServicesVeiwSet, ClimbersVeiwSet, CleaningVeiwSet, CargoTransportationVeiwSet, MinorRepairsVeiwSet, CapRepairsInformationVeiwSet

router = DefaultRouter()
router.register(r'apartment-services', ApartmentServicesVeiwSet)
router.register(r'house-services', HouseServicesVeiwSet)
router.register(r'business-services', BusinessServicesVeiwSet)
router.register(r'additional-services-information', InformationAdditionalServicesVeiwSet)
router.register(r'climbers', ClimbersVeiwSet)
router.register(r'cleaning', CleaningVeiwSet)
router.register(r'cargo-transportation', CargoTransportationVeiwSet)
router.register(r'minor-repairs', MinorRepairsVeiwSet)
router.register(r'cap-repairs-information', CapRepairsInformationVeiwSet)

urlpatterns = router.urls