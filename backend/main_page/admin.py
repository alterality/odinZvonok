from django.contrib import admin
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from .models import HomePage, HomeAdvantage, HomeAboutCompany


class HomePageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and HomePage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 домашиних страниц."))
        super(HomePageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if HomePage.objects.count() >= 1:
            return False
        return super(HomePageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "title", "description")
admin.site.register(HomePage, HomePageAdmin)


class HomeAdvantageAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and HomeAdvantage.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о компании на домашней странице."))
        super(HomeAdvantageAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if HomeAdvantage.objects.count() >= 1:
            return False
        return super(HomeAdvantageAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False

    list_display = ("id", "created_at")
admin.site.register(HomeAdvantage, HomeAdvantageAdmin)


class HomeAboutCompanyAdmin(TranslationAdmin):
    def save_model(self, request, obj, form, change):
        if not obj.pk and HomeAboutCompany.objects.count() >= 1:
            raise ValidationError(_("Вы не можете создать более 1 блока о преимуществах на домашней странице."))
        super(HomeAboutCompanyAdmin, self).save_model(request, obj, form, change)

    def has_add_permission(self, request):
        if HomeAboutCompany.objects.count() >= 1:
            return False
        return super(HomeAboutCompanyAdmin, self).has_add_permission(request)

    def has_delete_permission(self, request, obj=None):
        return False
    list_display = ("id", "description1", "description2")
admin.site.register(HomeAboutCompany, HomeAboutCompanyAdmin)