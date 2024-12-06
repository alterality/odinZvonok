from modeltranslation.translator import register, TranslationOptions
from .models import HomePage, HomeAdvantage, HomeAboutCompany


@register(HomePage)
class HomePageTranslationOptions(TranslationOptions):
    fields = ("title", "description")


@register(HomeAdvantage)
class HomeAdvantageTranslationOptions(TranslationOptions):
    fields = (
        "description1",
        "description2",
        "description3",
        "description4",
        "description5",
        "description6",
        "description7",
        "description8",
        "description9",
    )


@register(HomeAboutCompany)
class HomeAboutCompanyTranslationOptions(TranslationOptions):
    fields = ("description1", "description2")
