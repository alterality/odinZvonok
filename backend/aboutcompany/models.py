from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class AboutCompany(models.Model):
    body = models.CharField(max_length=400, verbose_name="О компании")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")


    def save(self, *args, **kwargs):
        if not self.pk and AboutCompany.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 страниц О компании.")
        super(AboutCompany, self).save(*args, **kwargs)


    def __str__(self) -> str:
        return self.body
    
    class Meta:
        verbose_name = 'О компании'
        verbose_name_plural =  'О компании'

class TeamMember(models.Model):
    name = models.CharField(max_length=50, verbose_name="Имя")
    image = models.ImageField(upload_to='media/', verbose_name="Фото")
    position = models.CharField(max_length=50, verbose_name="Должность")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Член команды"
        verbose_name_plural = "Наша команда"


class ClientPartner(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название")
    image = models.ImageField(upload_to='media/', verbose_name="Логотип")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата добавления")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = "Клиент или партнёр"
        verbose_name_plural = "Клиенты и партнёры"