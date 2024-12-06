from rest_framework.routers import DefaultRouter
from .views import PartnershipProgramViewSet, VacancyViewSet, DetailsViewSet

router = DefaultRouter()
router.register(r'partnership-program', PartnershipProgramViewSet)
router.register(r'vacancies', VacancyViewSet)
router.register(r'details', DetailsViewSet)

urlpatterns = router.urls
