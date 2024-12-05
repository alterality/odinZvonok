from modeltranslation.translator import register, TranslationOptions
from .models import AboutCompany


@register(AboutCompany)
class GPTranslationOptions(TranslationOptions):
    fields = ('body',)