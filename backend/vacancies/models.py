from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


class PartnershipProgram(models.Model):
    description = models.TextField(verbose_name=_("Описание"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return _("Партнёрская программа")
    
    def save(self, *args, **kwargs):
        if not self.pk and PartnershipProgram.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о партнерской программе.")
        super(PartnershipProgram, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Партнёрская программа")
        verbose_name_plural = _("Партнёрская программа")


class Vacancy(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    description = models.TextField(verbose_name=_("Описание"))
    specified_date = models.DateField(verbose_name=_("Дата"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = _("Вакансия")
        verbose_name_plural = _("Вакансии")


class Details(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("описание"))
    section1_title = models.CharField(max_length=255, verbose_name=_("Заголовок 1"))
    section1_field1 = models.TextField(verbose_name=_("Текстовое поле 1"))
    section1_field2 = models.TextField(verbose_name=_("Текстовое поле 2"))
    section1_field3 = models.TextField(verbose_name=_("Текстовое поле 3"))
    section2_title = models.CharField(max_length=255, verbose_name=_("Заголовок 2"))
    section2_field1 = models.TextField(verbose_name=_("Текстовое поле 4"))
    section2_field2 = models.TextField(verbose_name=_("Текстовое поле 5"))
    section2_field3 = models.TextField(verbose_name=_("Текстовое поле 6"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.section1_title
    
    def save(self, *args, **kwargs):
        if not self.pk and Details.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о деталях партнерской программы.")
        super(Details, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Подробности")
        verbose_name_plural = _("Подробности")
