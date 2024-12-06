from django.db import models
from django.utils.translation import gettext_lazy as _


class PartnershipProgram(models.Model):
    description = models.TextField(verbose_name=_("Описание"))

    def __str__(self):
        return _("Партнёрская программа")

    class Meta:
        verbose_name = _("Партнёрская программа")
        verbose_name_plural = _("Партнёрская программа")


class Vacancy(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    description = models.TextField(verbose_name=_("Описание"))
    specified_date = models.DateField(verbose_name=_("Дата"))

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

    def __str__(self):
        return self.section1_title

    class Meta:
        verbose_name = _("Подробности")
        verbose_name_plural = _("Подробности")
