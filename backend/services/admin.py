from django.contrib import admin
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages,
    BusinessServices,
    InformationAdditionalServices,
    Climbers,
    ClimbersListOfServices,
    Cleaning,
    CargoTransportation,
    MinorRepairs,
    Santehnika,
    Elektrika,
    DoorsAndWindows,
    Stena,
    Pol,
    BytTehnika,
    CapRepairsInformation
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



class BusinessServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and BusinessServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 информации о тарифах для компаний."))
        super(BusinessServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if BusinessServices.objects.count() >= 1:
            return False
        return super(BusinessServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")

admin.site.register(BusinessServices, BusinessServicesAdmin)




class InformationAdditionalServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and InformationAdditionalServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 информации о тарифах для доп. услуг."))
        super(InformationAdditionalServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if InformationAdditionalServices.objects.count() >= 1:
            return False
        return super(InformationAdditionalServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")

admin.site.register(InformationAdditionalServices, InformationAdditionalServicesAdmin)




class ClimbersListOfServicesInline(TranslationTabularInline):
    model = ClimbersListOfServices
    extra = 1  

class ClimbersAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Climbers.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 тарифов для альпенистов."))
        super(ClimbersAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Climbers.objects.count() >= 1:
            return False
        return super(ClimbersAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [ClimbersListOfServicesInline]

admin.site.register(Climbers, ClimbersAdmin)




class CleaningAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Cleaning.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 информации о тарифах клининга"))
        super(CleaningAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Cleaning.objects.count() >= 1:
            return False
        return super(CleaningAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")

admin.site.register(Cleaning, CleaningAdmin)




class CargoTransportationAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and CargoTransportation.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 информации о тарифах грузоперевозки"))
        super(CargoTransportationAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if CargoTransportation.objects.count() >= 1:
            return False
        return super(CargoTransportationAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")

admin.site.register(CargoTransportation, CargoTransportationAdmin)






class SantehnikaInline(TranslationTabularInline):
    model = Santehnika
    extra = 1  

class ElektrikaInline(TranslationTabularInline):
    model = Elektrika
    extra = 1  

class DoorsAndWindowsInline(TranslationTabularInline):
    model = DoorsAndWindows
    extra = 1  

class StenaInline(TranslationTabularInline):
    model = Stena
    extra = 1  

class PolInline(TranslationTabularInline):
    model = Pol
    extra = 1  

class BytTehnikaInline(TranslationTabularInline):
    model = BytTehnika
    extra = 1  

class MinorRepairsAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and MinorRepairs.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 тарифов для мелкосрочного ремонта."))
        super(MinorRepairsAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if MinorRepairs.objects.count() >= 1:
            return False
        return super(MinorRepairsAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [SantehnikaInline, ElektrikaInline, DoorsAndWindowsInline, StenaInline, PolInline, BytTehnikaInline]

admin.site.register(MinorRepairs, MinorRepairsAdmin)







class CapRepairsInformationAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and CapRepairsInformation.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 информации о кап. ремонта."))
        super(CapRepairsInformationAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if CapRepairsInformation.objects.count() >= 1:
            return False
        return super(CapRepairsInformationAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")

admin.site.register(CapRepairsInformation, CapRepairsInformationAdmin)