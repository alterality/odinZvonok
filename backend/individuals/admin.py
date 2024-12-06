from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import LegalEntity, OurService, Advantage, Assistance, WorkStage, Document


@admin.register(LegalEntity)
class LegalEntityAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'description')


@admin.register(OurService)
class OurServiceAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4', 'field5')


@admin.register(Advantage)
class AdvantageAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4')


@admin.register(Assistance)
class AssistanceAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4')


@admin.register(WorkStage)
class WorkStageAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4', 'field5')


@admin.register(Document)
class DocumentAdmin(TranslationAdmin):
    list_display = ('id', 'title', 'document')






# from django.contrib import admin
# from django.core.exceptions import ValidationError
# from django.utils.translation import gettext_lazy as _
# from modeltranslation.admin import TranslationAdmin
# from .models import (
#     Individual,
#     SuitableService,
#     SuitableServicePoint,
#     Advantage,
#     AdvantagePoint,
#     Assistance,
#     AssistancePoint,
#     WorkStage,
#     WorkStagePoint,
#     Document,
# )


# class BasePointInline(admin.TabularInline):
#     extra = 1


# class SuitableServicePointInline(BasePointInline):
#     model = SuitableServicePoint


# class AdvantagePointInline(BasePointInline):
#     model = AdvantagePoint


# class AssistancePointInline(BasePointInline):
#     model = AssistancePoint


# class WorkStagePointInline(BasePointInline):
#     model = WorkStagePoint


# class BaseModelAdmin(TranslationAdmin):
#     list_display = ("id", "title")


# class LimitedAdmin(TranslationAdmin):
#     def has_add_permission(self, request):
#         return False  

#     def has_delete_permission(self, request, obj=None):
#         return False  


# @admin.register(Individual)
# class IndividualAdmin(BaseModelAdmin):
#     pass


# @admin.register(SuitableService)
# class SuitableServiceAdmin(BaseModelAdmin):
#     inlines = [SuitableServicePointInline]


# @admin.register(Advantage)
# class AdvantageAdmin(BaseModelAdmin):
#     inlines = [AdvantagePointInline]


# @admin.register(Assistance)
# class AssistanceAdmin(BaseModelAdmin):
#     inlines = [AssistancePointInline]


# @admin.register(WorkStage)
# class WorkStageAdmin(BaseModelAdmin):
#     inlines = [WorkStagePointInline]


# @admin.register(Document)
# class DocumentAdmin(LimitedAdmin):
#     list_display = ("id", "title")


