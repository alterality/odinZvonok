from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import (
    LegalEntityViewSet,
    OurServiceViewSet,
    IndividualAdvantageViewSet,
    IndividualAssistanceViewSet,
    IndividualWorkStageViewSet,
    DocumentViewSet,
)

router = DefaultRouter()
router.register(r"legal-entities", LegalEntityViewSet)
router.register(r"our-services", OurServiceViewSet)
router.register(r"advantagesIviduals", IndividualAdvantageViewSet)
router.register(r"assistance", IndividualAssistanceViewSet)
router.register(r"work-stagesIndividuals", IndividualWorkStageViewSet)
router.register(r"documents", DocumentViewSet)

urlpatterns = router.urls








# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import (
#     IndividualViewSet,
#     SuitableServiceViewSet,
#     AdvantageViewSet,
#     AssistanceViewSet,
#     WorkStageViewSet,
#     DocumentViewSet,
# )

# router = DefaultRouter()
# router.register(r"individuals", IndividualViewSet, basename="individuals")
# router.register(r"suitable-services", SuitableServiceViewSet, basename="suitable-services")
# router.register(r"advantages", AdvantageViewSet, basename="advantages")
# router.register(r"assistance", AssistanceViewSet, basename="assistance")
# router.register(r"work-stages", WorkStageViewSet, basename="work-stages")
# router.register(r"documents", DocumentViewSet, basename="documents")

# urlpatterns = [
#     path("", include(router.urls)),
# ]