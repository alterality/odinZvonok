from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from .models import PartnershipProgram, Vacancy, Details


class PartnershipProgramAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and PartnershipProgram.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о партнерских программах."))
        super(PartnershipProgramAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if PartnershipProgram.objects.count() >= 1:
            return False
        return super(PartnershipProgramAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "description")
admin.site.register(PartnershipProgram, PartnershipProgramAdmin)


@admin.register(Vacancy)
class VacancyAdmin(TranslationAdmin):
    list_display = ("id", "title", "specified_date")


class DetailsAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and Details.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 страниц о деталях партнерских соглашений."))
        super(DetailsAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if Details.objects.count() >= 1:
            return False
        return super(DetailsAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title", "section1_title", "section2_title")
admin.site.register(Details, DetailsAdmin)
