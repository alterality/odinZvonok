from rest_framework import viewsets
from rest_framework import permissions
from .models import (
    HomePage, HomeAdvantage, HomeAboutCompany
)
from .serializers import (
    HomePageSerializer, HomeAdvantageSerializer, HomeAboutCompanySerializer
)


class HomePageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomePage.objects.all()
    serializer_class = HomePageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    

class HomeAdvantageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeAdvantage.objects.all()
    serializer_class = HomeAdvantageSerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]
    
    
class HomeAboutCompanyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HomeAboutCompany.objects.all()
    serializer_class = HomeAboutCompanySerializer

    def get_permissions(self):
        if self.request.method in ['PATCH', 'PUT', 'DELETE', 'POST']:
            return [permissions.IsAdminUser()]
        return [permissions.AllowAny()]