from rest_framework.routers import DefaultRouter
from .views import (
    CapRepairsTitleVeiwSet,
    FloorWorkCapServicesVeiwSet,
    WallWorkCapServicesVeiwSet,
    TilingWorkCapServicesVeiwSet,
    PlumbingWorkCapServicesVeiwSet,
    DismantlingWorkCapServicesVeiwSet,
    ElectricalWorkCapServicesVeiwSet
)

router = DefaultRouter()
router.register(r'cap-repairs-title', CapRepairsTitleVeiwSet)
router.register(r'floor-work-cap-services', FloorWorkCapServicesVeiwSet)
router.register(r'wall-work-cap-services', WallWorkCapServicesVeiwSet)
router.register(r'tiling-work-cap-services', TilingWorkCapServicesVeiwSet)
router.register(r'plumbing-work-cap-services', PlumbingWorkCapServicesVeiwSet)
router.register(r'dismantling-work-cap-services', DismantlingWorkCapServicesVeiwSet)
router.register(r'electrical-work-cap-services', ElectricalWorkCapServicesVeiwSet)

urlpatterns = router.urls