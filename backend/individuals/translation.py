from modeltranslation.translator import register, TranslationOptions
from .models import LegalEntity, OurService, IndividualAdvantage, IndividualAssistance, IndividualWorkStage, Document


@register(LegalEntity)
class LegalEntityTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(OurService)
class OurServiceTranslationOptions(TranslationOptions):
    fields = ('title', 'field1', 'field2', 'field3', 'field4', 'field5')


@register(IndividualAdvantage)
class IndividualAdvantageTranslationOptions(TranslationOptions):
    fields = ('title', 'field1', 'field2', 'field3', 'field4')


@register(IndividualAssistance)
class IndividualAssistanceTranslationOptions(TranslationOptions):
    fields = ('title', 'field1', 'field2', 'field3', 'field4')


@register(IndividualWorkStage)
class IndividualWorkStageTranslationOptions(TranslationOptions):
    fields = ('title', 'field1', 'field2', 'field3', 'field4', 'field5')


@register(Document)
class DocumentTranslationOptions(TranslationOptions):
    fields = ('title',)



# from modeltranslation.translator import register, TranslationOptions
# from individuals.models import Individual, SuitableService, SuitableServicePoint, Advantage, Assistance, AssistancePoint, AdvantagePoint, WorkStage, Document, WorkStagePoint # Абсолютный импорт модели

# @register(Individual)
# class IndividualTranslationOptions(TranslationOptions):
#     fields = ("title", "description")


# @register(SuitableService)
# class SuitableServiceTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(Advantage)
# class AdvantageTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(Assistance)
# class AssistanceTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(WorkStage)
# class WorkStageTranslationOptions(TranslationOptions):
#     fields = ("title",)

# @register(WorkStagePoint)
# class WorkStagePointTranslationOptions(TranslationOptions):
#     fields = ("text",)

# @register(AdvantagePoint)
# class AdvantagePointTranslationOptions(TranslationOptions):
#     fields = ("text",)

# @register(AssistancePoint)
# class AssistancePointTranslationOptions(TranslationOptions):
#     fields = ("text",)


# @register(SuitableServicePoint)
# class SuitableServicePointTranslationOptions(TranslationOptions):
#     fields = ("text",)




# @register(Document)
# class DocumentTranslationOptions(TranslationOptions):
#     fields = ("title",)  
