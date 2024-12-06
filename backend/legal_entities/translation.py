from modeltranslation.translator import register, TranslationOptions
from .models import (
    IndividualEntity, Service, Advantage, Assistance,
    WorkStage, LegalDocument, IndividualDocument
)


@register(IndividualEntity)
class IndividualEntityTranslationOptions(TranslationOptions):
    fields = ("title", "description")


@register(Service)
class ServiceTranslationOptions(TranslationOptions):
    fields = ("title", "field1_text", "field2_text", "field3_text", "field4_text")


@register(Advantage)
class AdvantageTranslationOptions(TranslationOptions):
    fields = ("title", "field1", "field2", "field3", "field4")


@register(Assistance)
class AssistanceTranslationOptions(TranslationOptions):
    fields = ("title", "field1", "field2", "field3", "field4")


@register(WorkStage)
class WorkStageTranslationOptions(TranslationOptions):
    fields = ("title", "field1", "field2", "field3", "field4", "field5")


@register(LegalDocument)
class LegalDocumentTranslationOptions(TranslationOptions):
    fields = ("title",)


@register(IndividualDocument)
class IndividualDocumentTranslationOptions(TranslationOptions):
    fields = ("title",)












# from modeltranslation.translator import register, TranslationOptions
# from .models import (
#     LegalEntity, SuitableService, Advantage, Proposal, WorkStage, 
#     LegalDocument, IndividualDocument, AdvantagePoint, ProposalPoint, WorkStagePoint, SuitableServicePoint
# )

# @register(LegalEntity)
# class LegalEntityTranslationOptions(TranslationOptions):
#     fields = ("title", "description")


# @register(SuitableService)
# class SuitableServiceTranslationOptions(TranslationOptions):
#     fields = ("title", "description")

# @register(SuitableServicePoint)
# class SuitableServicePointTranslationOptions(TranslationOptions):
#     fields = ("title", "description")

# @register(Advantage)
# class AdvantageTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(Proposal)
# class ProposalTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(WorkStage)
# class WorkStageTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(AdvantagePoint)
# class AdvantagePointTranslationOptions(TranslationOptions):
#     fields = ("text",)


# @register(ProposalPoint)
# class ProposalPointTranslationOptions(TranslationOptions):
#     fields = ("text",)


# @register(WorkStagePoint)
# class WorkStagePointTranslationOptions(TranslationOptions):
#     fields = ("text",)


# @register(LegalDocument)
# class LegalDocumentTranslationOptions(TranslationOptions):
#     fields = ("title",)


# @register(IndividualDocument)
# class IndividualDocumentTranslationOptions(TranslationOptions):
#     fields = ("title",)
