from modeltranslation.translator import register, TranslationOptions
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages,
)


@register(ApartmentServices)
class ApartmentServicesTranslationOptions(TranslationOptions):
    fields = ("name", "price", "text_1", "text_2")


@register(ApartmentListOfServices)
class ApartmentListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(ApartmentListOfAdvantages)
class ApartmentListOfAdvantagesTranslationOptions(TranslationOptions):
    fields = ("value", )



@register(HouseServices)
class HouseServicesTranslationOptions(TranslationOptions):
    fields = ("name", "price", "text_1", "text_2")


@register(HouseListOfServices)
class HouseListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(HouseListOfAdvantages)
class HouseListOfAdvantagesTranslationOptions(TranslationOptions):
    fields = ("value", )

