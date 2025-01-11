from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class CapRepairsTitle(models.Model):
    title = models.CharField(max_length=70, verbose_name='Название')
    text = models.TextField(max_length=300, null=True, blank=True, verbose_name="Текст")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and CapRepairsTitle.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 описаний страницы капитального ремонта.")
        super(CapRepairsTitle, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Описание страницы кап. ремонта'
        verbose_name_plural = 'Описание страницы кап. ремонта'





class FloorWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and FloorWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(FloorWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные работы по полу'
        verbose_name_plural = 'Капитальные работы по полу'

class FloorWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(FloorWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по полу'
        verbose_name_plural = 'Услуги по полу'





class WallWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and WallWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(WallWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные работы по стенам'
        verbose_name_plural = 'Капитальные работы по стенам'

class WallWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(WallWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по стенам'
        verbose_name_plural = 'Услуги по стенам'





class TilingWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and TilingWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(TilingWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные плиточные работы'
        verbose_name_plural = 'Капитальные плиточные работы'

class TilingWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(TilingWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по плиткам'
        verbose_name_plural = 'Услуги по плиткам'





class PlumbingWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and PlumbingWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(PlumbingWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные сантехнические работы'
        verbose_name_plural = 'Капитальные сантехнические работы'

class PlumbingWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(PlumbingWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по сантехнике'
        verbose_name_plural = 'Услуги по сантехнике'





class DismantlingWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and DismantlingWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(DismantlingWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные демонтажные работы'
        verbose_name_plural = 'Капитальные демонтажные работы'

class DismantlingWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(DismantlingWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по демонтажу'
        verbose_name_plural = 'Услуги по демонтажу'






class ElectricalWorkCapServices(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and ElectricalWorkCapServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 списка услуг.")
        super(ElectricalWorkCapServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Капитальные электромонтажные работы'
        verbose_name_plural = 'Капитальные электромонтажные работы'

class ElectricalWorkCapListOfServices(models.Model):
    main_model = models.ForeignKey(ElectricalWorkCapServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Услуга по электромонтажу'
        verbose_name_plural = 'Услуги по электромонтажу'