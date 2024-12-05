from modeltranslation.translator import register, TranslationOptions
from .models import AboutCompany, TeamMember, ClientPartner


@register(AboutCompany)
class AboutCompanyTranslationOptions(TranslationOptions):
    fields = ('body',)


@register(TeamMember)
class TeamMemberTranslationOptions(TranslationOptions):
    fields = ('name', 'position')


@register(ClientPartner)
class ClientPartnerTranslationOptions(TranslationOptions):
    fields = ('name',)