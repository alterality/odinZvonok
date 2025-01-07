from django.utils import timezone
from django.db import models

class Application(models.Model):
    name = models.CharField(max_length=50, verbose_name='Имя')
    email = models.EmailField(verbose_name='Email')
    phone_number = models.CharField(verbose_name='Номер телефона')
    content = models.TextField(verbose_name='Сообщение')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')

    def __str__(self) -> str:
        return self.name
    
    class Meta:
        verbose_name = 'Заявка'
        verbose_name_plural = 'Заявки'


class BusinessApplication(models.Model):
    company_name = models.CharField(max_length=255, verbose_name='Имя компании')
    company_type = models.CharField(max_length=255, verbose_name='Тип компании')
    contact_person = models.CharField(max_length=255, verbose_name='Контактное лицо')
    phone_number = models.CharField(max_length=30, verbose_name='Номер телефона')
    site = models.TextField(max_length=255, verbose_name='Сайт')
    content = models.TextField(verbose_name='Сообщение')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата отправки')

    def __str__(self) -> str:
        return self.company_name
    
    class Meta:
        verbose_name = 'Заявка от юр. лица'
        verbose_name_plural = 'Заявки от юр. лиц'


