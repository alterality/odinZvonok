from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from .models import PartnershipProgram, Vacancy, Details


@admin.register(PartnershipProgram)
class PartnershipProgramAdmin(TranslationAdmin):
    list_display = ("id", "description")


@admin.register(Vacancy)
class VacancyAdmin(TranslationAdmin):
    list_display = ("id", "title", "specified_date")


@admin.register(Details)
class DetailsAdmin(TranslationAdmin):
    list_display = ("id", "title", "section1_title", "section2_title")
