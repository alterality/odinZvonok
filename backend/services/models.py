from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class ApartmentServices(models.Model):
    name = models.CharField(max_length=25, verbose_name="Название тарифа")
    price = models.CharField(max_length=50, verbose_name="Цена тарифа")
    text_1 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 1")
    text_2 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 2")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and ApartmentServices.objects.count() >= 2:
            raise ValidationError("Вы не можете создать более 2 тарифов для квартир.")
        super(ApartmentServices, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'Тариф для квартир'
        verbose_name_plural = 'Тарифы для квартир'

class ApartmentListOfServices(models.Model):
    main_model = models.ForeignKey(ApartmentServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

class ApartmentListOfAdvantages(models.Model):
    main_model = models.ForeignKey(ApartmentServices, on_delete=models.CASCADE, related_name='advantages')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название преимущества")



class HouseServices(models.Model):
    name = models.CharField(max_length=25, verbose_name="Название тарифа")
    price = models.CharField(max_length=50, verbose_name="Цена тарифа")
    text_1 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 1")
    text_2 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 2")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and HouseServices.objects.count() >= 2:
            raise ValidationError("Вы не можете создать более 2 тарифов для домов.")
        super(HouseServices, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'Тариф для домов'
        verbose_name_plural = 'Тарифы для домов'

class HouseListOfServices(models.Model):
    main_model = models.ForeignKey(HouseServices, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

class HouseListOfAdvantages(models.Model):
    main_model = models.ForeignKey(HouseServices, on_delete=models.CASCADE, related_name='advantages')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название преимущества")