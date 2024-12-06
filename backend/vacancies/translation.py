from modeltranslation.translator import register, TranslationOptions
from .models import PartnershipProgram, Vacancy, Details


@register(PartnershipProgram)
class PartnershipProgramTranslationOptions(TranslationOptions):
    fields = ("description",)


@register(Vacancy)
class VacancyTranslationOptions(TranslationOptions):
    fields = ("title", "description")


@register(Details)
class DetailsTranslationOptions(TranslationOptions):
    fields = (
        "title",
        "section1_title",
        "section1_field1",
        "section1_field2",
        "section1_field3",
        "section2_title",
        "section2_field1",
        "section2_field2",
        "section2_field3",
    )
