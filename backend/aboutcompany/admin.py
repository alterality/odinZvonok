from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import AboutCompany
from django.db import models
from modeltranslation.admin import TranslationAdmin
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


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

admin.site.register(AboutCompany, AboutCompanyAdmin)