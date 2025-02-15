from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


class LegalEntity(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    description = models.TextField(verbose_name=_("Описание"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and LegalEntity.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о физ. лицах.")
        super(LegalEntity, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Физ. лица")
        verbose_name_plural = _("Физ. лица")


class OurService(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    field1 = models.TextField(verbose_name=_("Текстовое поле 1"))
    field2 = models.TextField(verbose_name=_("Текстовое поле 2"))
    field3 = models.TextField(verbose_name=_("Текстовое поле 3"))
    field4 = models.TextField(verbose_name=_("Текстовое поле 4"))
    field5 = models.TextField(verbose_name=_("Текстовое поле 5"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and OurService.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о наших услугах.")
        super(OurService, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Наши услуги")
        verbose_name_plural = _("Наши услуги")


class IndividualAdvantage(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    field1 = models.TextField(verbose_name=_("Текстовое поле 1"))
    field2 = models.TextField(verbose_name=_("Текстовое поле 2"))
    field3 = models.TextField(verbose_name=_("Текстовое поле 3"))
    field4 = models.TextField(verbose_name=_("Текстовое поле 4"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and IndividualAdvantage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о преимуществах.")
        super(IndividualAdvantage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Преимущество")
        verbose_name_plural = _("Преимущества")


class IndividualAssistance(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    field1 = models.TextField(verbose_name=_("Текстовое поле 1"))
    field2 = models.TextField(verbose_name=_("Текстовое поле 2"))
    field3 = models.TextField(verbose_name=_("Текстовое поле 3"))
    field4 = models.TextField(verbose_name=_("Текстовое поле 4"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and IndividualAssistance.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о помощи.")
        super(IndividualAssistance, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Помощь")
        verbose_name_plural = _("Помощь")


class IndividualWorkStage(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    field1 = models.TextField(verbose_name=_("Текстовое поле 1"))
    field2 = models.TextField(verbose_name=_("Текстовое поле 2"))
    field3 = models.TextField(verbose_name=_("Текстовое поле 3"))
    field4 = models.TextField(verbose_name=_("Текстовое поле 4"))
    field5 = models.TextField(verbose_name=_("Текстовое поле 5"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and IndividualWorkStage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц об этапах работы.")
        super(IndividualWorkStage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Этап работы")
        verbose_name_plural = _("Этапы работы")


class Document(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    document1 = models.FileField(upload_to="media/documents/individuals", verbose_name=_("Копия паспорта"))
    document2 = models.FileField(upload_to="media/documents/individuals", verbose_name=_("Справка с места жительства"))
    document3 = models.FileField(upload_to="media/documents/individuals", verbose_name=_("Копия нотаривальной доверенности лица, уполномоченного на заключение договора"))
    document4 = models.FileField(upload_to="media/documents/individuals", verbose_name=_("Копия разрешительной документации"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and Document.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о документах.")
        super(Document, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Документ")
        verbose_name_plural = _("Документы")




# from django.db import models
# from django.utils.translation import gettext_lazy as _

# class Individual(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     description = models.TextField(verbose_name=_("Описание"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Физ. лицам")
#         verbose_name_plural = _("Физ. лицам")


# class SuitableService(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Подходящий сервис")
#         verbose_name_plural = _("Подходящие сервисы")


# class SuitableServicePoint(models.Model):
#     service = models.ForeignKey(SuitableService, on_delete=models.CASCADE, related_name="points", verbose_name=_("Сервис"))
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт сервиса")
#         verbose_name_plural = _("Пункты сервисов")


# class Advantage(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Преимущество")
#         verbose_name_plural = _("Преимущества")


# class AdvantagePoint(models.Model):
#     advantage = models.ForeignKey(Advantage, on_delete=models.CASCADE, related_name="points", verbose_name=_("Преимущество"))
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт преимущества")
#         verbose_name_plural = _("Пункты преимуществ")


# class Assistance(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Помощь")
#         verbose_name_plural = _("Помощь")


# class AssistancePoint(models.Model):
#     assistance = models.ForeignKey(Assistance, on_delete=models.CASCADE, related_name="points", verbose_name=_("Помощь"))
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт помощи")
#         verbose_name_plural = _("Пункты помощи")


# class WorkStage(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Этап работы")
#         verbose_name_plural = _("Этапы работы")


# class WorkStagePoint(models.Model):
#     stage = models.ForeignKey(WorkStage, on_delete=models.CASCADE, related_name="points", verbose_name=_("Этап работы"))
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт этапа работы")
#         verbose_name_plural = _("Пункты этапов работы")


# class Document(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     pdf_file = models.FileField(upload_to="media/documents/", verbose_name=_("PDF файл"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Документ")
#         verbose_name_plural = _("Документы")
