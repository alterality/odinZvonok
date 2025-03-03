from django.contrib import admin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from .models import AboutCompany, TeamMember, ClientPartner
from modeltranslation.admin import TranslationAdmin


class AboutCompanyAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and AboutCompany.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 страниц О компании."))
        super(AboutCompanyAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if AboutCompany.objects.count() >= 1:
            return False
        return super(AboutCompanyAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ('id', 'body', 'created_at')


class TeamMemberAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and TeamMember.objects.count() >= 5:
            raise ValidationError(_("Вы не можете создать более 5 сотрудников."))
        super(TeamMemberAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if TeamMember.objects.count() >= 5:
            return False
        return super(TeamMemberAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return True

    list_display = ('id', 'name', 'position', 'created_at')


class ClientPartnerAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and ClientPartner.objects.count() >= 4:
            raise ValidationError(_("Вы не можете создать более 4 партнеров и компаний."))
        super(ClientPartnerAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if ClientPartner.objects.count() >= 4:
            return False
        return super(ClientPartnerAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ('id', 'name', 'created_at')


admin.site.register(AboutCompany, AboutCompanyAdmin)
admin.site.register(TeamMember, TeamMemberAdmin)
admin.site.register(ClientPartner, ClientPartnerAdmin)