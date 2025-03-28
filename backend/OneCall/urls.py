"""
URL configuration for OneCall project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include
from forms import views
from django.conf.urls.i18n import i18n_patterns
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="OneCall API",
        default_version='v1',
        description="Документация API для проекта OneCall",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="support@onecall.com"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # path('api/service-request/', views.service_request_view, name='service_request'),
    # path('api/success/', views.success_view, name='success'),

    path('api/', include('aboutcompany.urls')),
    path('api/', include('vacancies.urls')),  
    path('api/', include('legal_entities.urls')),  
    path('api/', include('individuals.urls')),
    path('api/', include('main_page.urls')),
    path('api/', include('services.urls')),
    path('api/', include('forms.urls')),
    path('api/', include('cap_repairs.urls')),

    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

urlpatterns += i18n_patterns(
    path('api/', include('aboutcompany.urls')),
    path('api/', include('vacancies.urls')),  
    path('api/', include('legal_entities.urls')),  
    path('api/', include('individuals.urls')),
    path('api/', include('main_page.urls')),
    path('api/', include('services.urls')),
    path('api/', include('forms.urls')),
    path('api/', include('cap_repairs.urls')),
)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
