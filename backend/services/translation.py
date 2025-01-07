from modeltranslation.translator import register, TranslationOptions
from .models import (
    ApartmentServices, 
    ApartmentListOfServices, 
    ApartmentListOfAdvantages,
    HouseServices,
    HouseListOfServices,
    HouseListOfAdvantages,
    BusinessServices,
    InformationAdditionalServices,
    Climbers,
    ClimbersListOfServices,
    Cleaning,
    CargoTransportation,
    MinorRepairs,
    Santehnika,
    Elektrika,
    DoorsAndWindows,
    Stena,
    Pol,
    BytTehnika,
    CapRepairsInformation
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



@register(BusinessServices)
class BusinessServicesTranslationOptions(TranslationOptions):
    fields = ("text_1", "text_2")



@register(InformationAdditionalServices)
class InformationAdditionalServicesTranslationOptions(TranslationOptions):
    fields = ("text_1", "text_2")



@register(ClimbersListOfServices)
class ClimbersListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(Climbers)
class ClimbersTranslationOptions(TranslationOptions):
    fields = ()



@register(Cleaning)
class CleaningTranslationOptions(TranslationOptions):
    fields = ("text", )



@register(CargoTransportation)
class CargoTransportationTranslationOptions(TranslationOptions):
    fields = ("minivan", "porter", "sprinter", "fura")






@register(MinorRepairs)
class MinorRepairsTranslationOptions(TranslationOptions):
    fields = ()

@register(Santehnika)
class SantehnikaTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(Elektrika)
class ElektrikaTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(DoorsAndWindows)
class DoorsAndWindowsTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(Stena)
class StenaTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(Pol)
class PolTranslationOptions(TranslationOptions):
    fields = ("value", )

@register(BytTehnika)
class BytTehnikaTranslationOptions(TranslationOptions):
    fields = ("value", )





@register(CapRepairsInformation)
class CapRepairsInformationTranslationOptions(TranslationOptions):
    fields = ("text", )