from rest_framework.routers import DefaultRouter
from .views import HomePageViewSet, HomeAdvantageViewSet, HomeAboutCompanyViewSet

router = DefaultRouter()
router.register(r'home-page', HomePageViewSet)
router.register(r'home-advantage', HomeAdvantageViewSet)
router.register(r'home-about-company', HomeAboutCompanyViewSet)

urlpatterns = router.urls