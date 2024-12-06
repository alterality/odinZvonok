from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import (
    IndividualEntity, Service, Advantage, Assistance,
    WorkStage, LegalDocument, IndividualDocument
)


@admin.register(IndividualEntity)
class IndividualEntityAdmin(TranslationAdmin):
    list_display = ("id", "title", "description")


@admin.register(Service)
class ServiceAdmin(TranslationAdmin):
    list_display = ("id", "title")


@admin.register(Advantage)
class AdvantageAdmin(TranslationAdmin):
    list_display = ("id", "title")


@admin.register(Assistance)
class AssistanceAdmin(TranslationAdmin):
    list_display = ("id", "title")


@admin.register(WorkStage)
class WorkStageAdmin(TranslationAdmin):
    list_display = ("id", "title")


@admin.register(LegalDocument)
class LegalDocumentAdmin(TranslationAdmin):
    list_display = ("id", "title")


@admin.register(IndividualDocument)
class IndividualDocumentAdmin(TranslationAdmin):
    list_display = ("id", "title")




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
