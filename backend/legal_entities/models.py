from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.exceptions import ValidationError


class IndividualEntity(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    description = models.TextField(verbose_name=_("Описание"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and IndividualEntity.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о юр. лицах.")
        super(IndividualEntity, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Юр. лица")
        verbose_name_plural = _("Юр. лица")


class Service(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    field1_image = models.ImageField(upload_to="media/services", verbose_name=_("Картинка 1"))
    field1_text = models.TextField(verbose_name=_("Текстовое поле 1"))
    field2_image = models.ImageField(upload_to="media/services", verbose_name=_("Картинка 2"))
    field2_text = models.TextField(verbose_name=_("Текстовое поле 2"))
    field3_image = models.ImageField(upload_to="media/services", verbose_name=_("Картинка 3"))
    field3_text = models.TextField(verbose_name=_("Текстовое поле 3"))
    field4_image = models.ImageField(upload_to="media/services", verbose_name=_("Картинка 4"))
    field4_text = models.TextField(verbose_name=_("Текстовое поле 4"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and Service.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц об обслуживание помещений.")
        super(Service, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Обслуживание помещений")
        verbose_name_plural = _("Обслуживание помещений")


class Advantage(models.Model):
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
        if not self.pk and Advantage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о преимуществах.")
        super(Advantage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Преимущество")
        verbose_name_plural = _("Преимущества")


class Assistance(models.Model):
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
        if not self.pk and Assistance.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о помощи.")
        super(Assistance, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Помощь")
        verbose_name_plural = _("Помощь")


class WorkStage(models.Model):
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
        if not self.pk and WorkStage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц об этапах работы.")
        super(WorkStage, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Этап работы")
        verbose_name_plural = _("Этапы работы")


class LegalDocument(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    doc1 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Копия свидетельства о регистрации юридического лица"))
    doc2 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Копия устава юридического лица"))
    doc3 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Реквизиты"))
    doc4 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Копия доверенности лица, уполномоченного на заключение договора"))
    doc5 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Документы подтверждающие полномочия руководителя юридического лица"))
    doc6 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Копия свидетельства о постановке на налоговый учет (ИНН)"))
    doc7 = models.FileField(upload_to="media/documents/legal", verbose_name=_("Копия разрешительной документации"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and LegalDocument.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о документах для юр. лиц.")
        super(LegalDocument, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Документ для юр. лиц")
        verbose_name_plural = _("Документы для юр. лиц")


class IndividualDocument(models.Model):
    title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
    doc1 = models.FileField(upload_to="media/documents/individualbuissnes", verbose_name=_("Копия свидетельства о регистрации ИП"))
    doc2 = models.FileField(upload_to="media/documents/individualbuissnes", verbose_name=_("Копия паспорта ИП"))
    doc3 = models.FileField(upload_to="media/documents/individualbuissnes", verbose_name=_("Копия свидетельства о постановке на налоговый учет"))
    doc4 = models.FileField(upload_to="media/documents/individualbuissnes", verbose_name=_("Копия нотаривальной доверенности лица, уполномоченного на заключение договора"))
    doc5 = models.FileField(upload_to="media/documents/individualbuissnes", verbose_name=_("Копия разрешительной документации"))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.pk and IndividualDocument.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц о документах для ИП.")
        super(IndividualDocument, self).save(*args, **kwargs)

    class Meta:
        verbose_name = _("Документ для ИП")
        verbose_name_plural = _("Документы для ИП")


# from django.db import models
# from django.utils.translation import gettext_lazy as _

# class LegalEntity(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     description = models.TextField(verbose_name=_("Описание"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Юр. лицам")
#         verbose_name_plural = _("Юр. лицам")



# class SuitableService(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     description = models.TextField(verbose_name=_("Описание"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Подходящая услуга")
#         verbose_name_plural = _("Подходящие услуги")


# class SuitableServicePoint(models.Model):
#     service = models.ForeignKey(
#         SuitableService,
#         on_delete=models.CASCADE,
#         related_name="points",
#         verbose_name=_("Услуга"),
#     )
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт услуги")
#         verbose_name_plural = _("Пункты услуг")


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


# class Proposal(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Предложение")
#         verbose_name_plural = _("Предложения")


# class ProposalPoint(models.Model):
#     proposal = models.ForeignKey(Proposal, on_delete=models.CASCADE, related_name="points", verbose_name=_("Предложение"))
#     text = models.TextField(verbose_name=_("Текст пункта"))

#     def __str__(self):
#         return self.text

#     class Meta:
#         verbose_name = _("Пункт предложения")
#         verbose_name_plural = _("Пункты предложений")


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


# class LegalDocument(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     pdf_file = models.FileField(upload_to="media/legal_documents/", verbose_name=_("PDF файл"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Документ для юр. лиц")
#         verbose_name_plural = _("Документы для юр. лиц")


# class IndividualDocument(models.Model):
#     title = models.CharField(max_length=255, verbose_name=_("Заголовок"))
#     pdf_file = models.FileField(upload_to="media/individual_documents/", verbose_name=_("PDF файл"))

#     def __str__(self):
#         return self.title

#     class Meta:
#         verbose_name = _("Документ для физ. лиц")
#         verbose_name_plural = _("Документы для физ. лиц")
