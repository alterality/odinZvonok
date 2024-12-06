from django.contrib import admin
from django.core.exceptions import ValidationError
from modeltranslation.admin import TranslationAdmin
from django.utils.translation import gettext_lazy as _
from .models import (
    IndividualEntity, Service, Advantage, Assistance,
    WorkStage, LegalDocument, IndividualDocument
)


class IndividualEntityAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and IndividualEntity.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о юр. лицах."))
        super(IndividualEntityAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if IndividualEntity.objects.count() >= 1:
            return False
        return super(IndividualEntityAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title", "description")


class ServiceAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Service.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока об обслуживание помещений."))
        super(ServiceAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Service.objects.count() >= 1:
            return False
        return super(ServiceAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")


class AdvantageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Advantage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о преимущества."))
        super(AdvantageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Advantage.objects.count() >= 1:
            return False
        return super(AdvantageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")


class AssistanceAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Assistance.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о помощи."))
        super(AssistanceAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Assistance.objects.count() >= 1:
            return False
        return super(AssistanceAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")


class WorkStageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and WorkStage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о этапах работы."))
        super(WorkStageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if WorkStage.objects.count() >= 1:
            return False
        return super(WorkStageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")


class LegalDocumentAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and LegalDocument.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о докуметах для юр. лиц."))
        super(LegalDocumentAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if LegalDocument.objects.count() >= 1:
            return False
        return super(LegalDocumentAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")


class IndividualDocumentAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and IndividualDocument.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о докуметах для ИП."))
        super(IndividualDocumentAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if IndividualDocument.objects.count() >= 1:
            return False
        return super(IndividualDocumentAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title")



admin.site.register(Service, ServiceAdmin)
admin.site.register(Advantage, AdvantageAdmin)
admin.site.register(Assistance, AssistanceAdmin)
admin.site.register(WorkStage, WorkStageAdmin)
admin.site.register(LegalDocument, LegalDocumentAdmin)
admin.site.register(IndividualDocument, IndividualDocumentAdmin)
admin.site.register(IndividualEntity, IndividualEntityAdmin)


# from django.contrib import admin
# from modeltranslation.admin import TranslationAdmin
# from .models import (
#     LegalEntity, SuitableService, Advantage, Proposal, WorkStage, 
#     LegalDocument, IndividualDocument, AdvantagePoint, ProposalPoint, WorkStagePoint, SuitableServicePoint
# )


# class BasePointInline(admin.TabularInline):
#     extra = 1


# class AdvantagePointInline(BasePointInline):
#     model = AdvantagePoint


# class ProposalPointInline(BasePointInline):
#     model = ProposalPoint


# class WorkStagePointInline(BasePointInline):
#     model = WorkStagePoint

# class SuitableServicePointInline(admin.TabularInline):
#     model = SuitableServicePoint
#     extra = 1


# @admin.register(SuitableService)
# class SuitableServiceAdmin(TranslationAdmin):
#     list_display = ("id", "title", "description")
#     inlines = [SuitableServicePointInline]

# class BaseModelAdmin(TranslationAdmin):
#     list_display = ("id", "title")


# class LimitedAdmin(TranslationAdmin):
#     def has_add_permission(self, request):
#         return False  
#     def has_delete_permission(self, request, obj=None):
#         return False 


# @admin.register(LegalEntity)
# class LegalEntityAdmin(BaseModelAdmin):
#     pass



# @admin.register(Advantage)
# class AdvantageAdmin(BaseModelAdmin):
#     inlines = [AdvantagePointInline]


# @admin.register(Proposal)
# class ProposalAdmin(BaseModelAdmin):
#     inlines = [ProposalPointInline]


# @admin.register(WorkStage)
# class WorkStageAdmin(BaseModelAdmin):
#     inlines = [WorkStagePointInline]


# @admin.register(LegalDocument)
# class LegalDocumentAdmin(LimitedAdmin):
#     list_display = ("id", "title", "pdf_file")


# @admin.register(IndividualDocument)
# class IndividualDocumentAdmin(LimitedAdmin):
#     list_display = ("id", "title", "pdf_file")
