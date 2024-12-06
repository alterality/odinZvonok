from rest_framework.routers import DefaultRouter
from .views import (
    IndividualEntityViewSet, ServiceViewSet, AdvantageViewSet,
    AssistanceViewSet, WorkStageViewSet, LegalDocumentViewSet,
    IndividualDocumentViewSet
)

router = DefaultRouter()
router.register(r'individual-entities', IndividualEntityViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'advantages', AdvantageViewSet)
router.register(r'assistances', AssistanceViewSet)
router.register(r'work-stages', WorkStageViewSet)
router.register(r'legal-documents', LegalDocumentViewSet)
router.register(r'individual-documents', IndividualDocumentViewSet)

urlpatterns = router.urls




# from rest_framework.routers import DefaultRouter
# from django.urls import path, include
# from .views import (
#     LegalEntityViewSet, SuitableServiceViewSet, AdvantageViewSet, ProposalViewSet, 
#     WorkStageViewSet, LegalDocumentViewSet, IndividualDocumentViewSet
# )

# router = DefaultRouter()
# router.register(r"legal-entities", LegalEntityViewSet, basename="legal-entities")
# router.register(r"suitable-services", SuitableServiceViewSet, basename="suitable-services")
# router.register(r"advantages", AdvantageViewSet, basename="advantages")
# router.register(r"proposals", ProposalViewSet, basename="proposals")
# router.register(r"work-stages", WorkStageViewSet, basename="work-stages")
# router.register(r"legal-documents", LegalDocumentViewSet, basename="legal-documents")
# router.register(r"individual-documents", IndividualDocumentViewSet, basename="individual-documents")

# urlpatterns = [
#     path("", include(router.urls)),
# ]
