from modeltranslation.translator import register, TranslationOptions
from .models import (
    CapRepairsTitle,
    FloorWorkCapServices,
    FloorWorkCapListOfServices,
    WallWorkCapServices,
    WallWorkCapListOfServices,
    TilingWorkCapServices,
    TilingWorkCapListOfServices,
    PlumbingWorkCapServices,
    PlumbingWorkCapListOfServices,
    DismantlingWorkCapServices,
    DismantlingWorkCapListOfServices,
    ElectricalWorkCapServices,
    ElectricalWorkCapListOfServices
)


@register(CapRepairsTitle)
class CapRepairsTitleTranslationOptions(TranslationOptions):
    fields = ("title", "text")






@register(FloorWorkCapServices)
class FloorWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(FloorWorkCapListOfServices)
class FloorWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )






@register(WallWorkCapServices)
class WallWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(WallWorkCapListOfServices)
class WallWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )





@register(TilingWorkCapServices)
class TilingWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(TilingWorkCapListOfServices)
class TilingWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )





@register(PlumbingWorkCapServices)
class PlumbingWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(PlumbingWorkCapListOfServices)
class PlumbingWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )






@register(DismantlingWorkCapServices)
class DismantlingWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(DismantlingWorkCapListOfServices)
class DismantlingWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )






@register(ElectricalWorkCapServices)
class ElectricalWorkCapServicesTranslationOptions(TranslationOptions):
    fields = ()

@register(ElectricalWorkCapListOfServices)
class ElectricalWorkCapListOfServicesTranslationOptions(TranslationOptions):
    fields = ("value", )