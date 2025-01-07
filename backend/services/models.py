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

    class Meta:
        verbose_name = 'Услуга тарифа'
        verbose_name_plural = 'Услуги тарифа'

class ApartmentListOfAdvantages(models.Model):
    main_model = models.ForeignKey(ApartmentServices, on_delete=models.CASCADE, related_name='advantages')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название преимущества")

    class Meta:
        verbose_name = 'Преимущество тарифа'
        verbose_name_plural = 'Преимущества тарифа'



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

    class Meta:
        verbose_name = 'Услуга тарифа'
        verbose_name_plural = 'Услуги тарифа'

class HouseListOfAdvantages(models.Model):
    main_model = models.ForeignKey(HouseServices, on_delete=models.CASCADE, related_name='advantages')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название преимущества")

    class Meta:
        verbose_name = 'Преимущество тарифа'
        verbose_name_plural = 'Преимущества тарифа'



class BusinessServices(models.Model):
    text_1 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 1")
    text_2 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 2")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and BusinessServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 информации для тарифов компаний.")
        super(BusinessServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Информация тарифа для компании'
        verbose_name_plural = 'Информация тарифа для компаний'



class InformationAdditionalServices(models.Model):
    text_1 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 1")
    text_2 = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание 2")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and InformationAdditionalServices.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 информации для тарифов доп. услуг.")
        super(InformationAdditionalServices, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Информация тарифов дополнительных услуг'
        verbose_name_plural = 'Информация тарифов дополнительных услуг'




class Climbers(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and Climbers.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 тарифов для альпенистов.")
        super(Climbers, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Тариф для альпенистов'
        verbose_name_plural = 'Тарифы для альпенистов'

class ClimbersListOfServices(models.Model):
    main_model = models.ForeignKey(Climbers, on_delete=models.CASCADE, related_name='services')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")




class Cleaning(models.Model):
    text = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and Cleaning.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 информации для клининга.")
        super(Cleaning, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Информация тарифа клининга'
        verbose_name_plural = 'Информация тарифа клининга'



class CargoTransportation(models.Model):
    minivan = models.TextField(max_length=100, blank=True, null=True, verbose_name="Описание минивена")
    porter = models.TextField(max_length=100, blank=True, null=True, verbose_name="Описание портера")
    sprinter = models.TextField(max_length=100, blank=True, null=True, verbose_name="Описание спринтера")
    fura = models.TextField(max_length=100, blank=True, null=True, verbose_name="Описание фуры")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and CargoTransportation.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 информации для клининга.")
        super(CargoTransportation, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Информация тарифа грузоперевозки'
        verbose_name_plural = 'Информация тарифа грузоперевозок'




class MinorRepairs(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and MinorRepairs.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 тарифов для мелкосрочного ремонта.")
        super(MinorRepairs, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Тариф для мелкосрочного ремонта'
        verbose_name_plural = 'Тарифы для мелкосрочного ремонта'

class Santehnika(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='santehnika')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Сантехника'
        verbose_name_plural = 'Сантехника'

class Elektrika(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='elektrika')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Электрика'
        verbose_name_plural = 'Электрика'

class DoorsAndWindows(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='doorsAndWindows')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Двери и окна'
        verbose_name_plural = 'Двери и окна'

class Stena(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='stena')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Работы по стенам'
        verbose_name_plural = 'Работы по стенам'

class Pol(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='pol')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Работы по полу'
        verbose_name_plural = 'Работы по полу'

class BytTehnika(models.Model):
    main_model = models.ForeignKey(MinorRepairs, on_delete=models.CASCADE, related_name='bytTehnika')
    value = models.CharField(max_length=255, blank=True, null=True, verbose_name="Название услуги")

    class Meta:
        verbose_name = 'Бытовая техника'
        verbose_name_plural = 'Бытовая техника'






class CapRepairsInformation(models.Model):
    text = models.TextField(max_length=200, blank=True, null=True, verbose_name="Описание")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and CapRepairsInformation.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 информации для кап. ремонта")
        super(CapRepairsInformation, self).save(*args, **kwargs)
    
    class Meta:
        verbose_name = 'Информация кап ремонта'
        verbose_name_plural = 'Информация кап ремонта'