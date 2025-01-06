from django.contrib import admin
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages
)
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# Register your models here.

class ApartmentListOfServicesInline(TranslationTabularInline):
    model = ApartmentListOfServices
    extra = 1  

class ApartmentListOfAdvantagesInline(TranslationTabularInline):
    model = ApartmentListOfAdvantages
    extra = 1  


class ApartmentServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and ApartmentServices.objects.count() >= 2:
            raise ValidationError(_("Вы не можете создать более 2 тарифов для квартир."))
        super(ApartmentServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if ApartmentServices.objects.count() >= 2:
            return False
        return super(ApartmentServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "name", "created_at")
    inlines = [ApartmentListOfServicesInline, ApartmentListOfAdvantagesInline]

admin.site.register(ApartmentServices, ApartmentServicesAdmin)




class HouseListOfServicesInline(TranslationTabularInline):
    model = HouseListOfServices
    extra = 1  

class HouseListOfAdvantagesInline(TranslationTabularInline):
    model = HouseListOfAdvantages
    extra = 1  


class HouseServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and HouseServices.objects.count() >= 2:
            raise ValidationError(_("Вы не можете создать более 2 тарифов для домов."))
        super(HouseServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if HouseServices.objects.count() >= 2:
            return False
        return super(HouseServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "name", "created_at")
    inlines = [HouseListOfServicesInline, HouseListOfAdvantagesInline]

admin.site.register(HouseServices, HouseServicesAdmin)