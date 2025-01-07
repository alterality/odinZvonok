from django.contrib import admin
from modeltranslation.admin import TranslationAdmin, TranslationTabularInline
from .models import (
    CapRepairsTitle,
    FloorWorkCapServices,
    FloorWorkCapListOfServices,
    WallWorkCapServices,
    WallWorkCapListOfServices,
    TilingWorkCapServices,
    TilingWorkCapListOfServices,
    PlumbingWorkCapServices,
    PlumbingWorkCapListOfServices,
    DismantlingWorkCapServices,
    DismantlingWorkCapListOfServices,
    ElectricalWorkCapServices,
    ElectricalWorkCapListOfServices
)
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# Register your models here.



class CapRepairsTitleAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and CapRepairsTitle.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 описаний страницы капитального ремонта."))
        super(CapRepairsTitleAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if CapRepairsTitle.objects.count() >= 1:
            return False
        return super(CapRepairsTitleAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "title", "created_at")

admin.site.register(CapRepairsTitle, CapRepairsTitleAdmin)






class FloorWorkCapListOfServicesInline(TranslationTabularInline):
    model = FloorWorkCapListOfServices
    extra = 1  

class FloorWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and FloorWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(FloorWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if FloorWorkCapServices.objects.count() >= 1:
            return False
        return super(FloorWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [FloorWorkCapListOfServicesInline]

admin.site.register(FloorWorkCapServices, FloorWorkCapServicesAdmin)





class WallWorkCapListOfServicesInline(TranslationTabularInline):
    model = WallWorkCapListOfServices
    extra = 1  

class WallWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and WallWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(WallWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if WallWorkCapServices.objects.count() >= 1:
            return False
        return super(WallWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [WallWorkCapListOfServicesInline]

admin.site.register(WallWorkCapServices, WallWorkCapServicesAdmin)








class TilingWorkCapListOfServicesInline(TranslationTabularInline):
    model = TilingWorkCapListOfServices
    extra = 1  

class TilingWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and TilingWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(TilingWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if TilingWorkCapServices.objects.count() >= 1:
            return False
        return super(TilingWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [TilingWorkCapListOfServicesInline]

admin.site.register(TilingWorkCapServices, TilingWorkCapServicesAdmin)








class PlumbingWorkCapListOfServicesInline(TranslationTabularInline):
    model = PlumbingWorkCapListOfServices
    extra = 1  

class PlumbingWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and PlumbingWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(PlumbingWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if PlumbingWorkCapServices.objects.count() >= 1:
            return False
        return super(PlumbingWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [PlumbingWorkCapListOfServicesInline]

admin.site.register(PlumbingWorkCapServices, PlumbingWorkCapServicesAdmin)









class DismantlingWorkCapListOfServicesInline(TranslationTabularInline):
    model = DismantlingWorkCapListOfServices
    extra = 1  

class DismantlingWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and DismantlingWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(DismantlingWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if DismantlingWorkCapServices.objects.count() >= 1:
            return False
        return super(DismantlingWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [DismantlingWorkCapListOfServicesInline]

admin.site.register(DismantlingWorkCapServices, DismantlingWorkCapServicesAdmin)









class ElectricalWorkCapListOfServicesInline(TranslationTabularInline):
    model = ElectricalWorkCapListOfServices
    extra = 1  

class ElectricalWorkCapServicesAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and ElectricalWorkCapServices.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 списка услуг."))
        super(ElectricalWorkCapServicesAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if ElectricalWorkCapServices.objects.count() >= 1:
            return False
        return super(ElectricalWorkCapServicesAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
    inlines = [ElectricalWorkCapListOfServicesInline]

admin.site.register(ElectricalWorkCapServices, ElectricalWorkCapServicesAdmin)

