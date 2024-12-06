from django.contrib import admin
from django.core.exceptions import ValidationError
from modeltranslation.admin import TranslationAdmin
from .models import LegalEntity, OurService, IndividualAdvantage, IndividualAssistance, IndividualWorkStage, Document
from django.utils.translation import gettext_lazy as _


class LegalEntityAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and LegalEntity.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о физ. лицах."))
        super(LegalEntityAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if LegalEntity.objects.count() >= 1:
            return False
        return super(LegalEntityAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ('id', 'title', 'description')


class OurServiceAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and OurService.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о наших услугах."))
        super(OurServiceAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if OurService.objects.count() >= 1:
            return False
        return super(OurServiceAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False    
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4', 'field5')


class IndividualAdvantageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and IndividualAdvantage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о преимуществах."))
        super(IndividualAdvantageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if IndividualAdvantage.objects.count() >= 1:
            return False
        return super(IndividualAdvantageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False  
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4')


class IndividualAssistanceAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and IndividualAssistance.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о помощи."))
        super(IndividualAssistanceAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if IndividualAssistance.objects.count() >= 1:
            return False
        return super(IndividualAssistanceAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False  
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4')


class IndividualWorkStageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and IndividualWorkStage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока об этапах работы."))
        super(IndividualWorkStageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if IndividualWorkStage.objects.count() >= 1:
            return False
        return super(IndividualWorkStageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False 
    list_display = ('id', 'title', 'field1', 'field2', 'field3', 'field4', 'field5')


class DocumentAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Document.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о документах."))
        super(DocumentAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Document.objects.count() >= 1:
            return False
        return super(DocumentAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False 
    list_display = ('id', 'title')

admin.site.register(Document, DocumentAdmin)
admin.site.register(IndividualWorkStage, IndividualWorkStageAdmin)
admin.site.register(IndividualAssistance, IndividualAssistanceAdmin)
admin.site.register(IndividualAdvantage, IndividualAdvantageAdmin)
admin.site.register(OurService, OurServiceAdmin)
admin.site.register(LegalEntity, LegalEntityAdmin)




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


