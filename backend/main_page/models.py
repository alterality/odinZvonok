from django.db import models
from django.core.exceptions import ValidationError

# Модель домашней страницы
class HomePage(models.Model):
    title = models.CharField(max_length=40, verbose_name="Название")
    description = models.TextField(verbose_name="Описание")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and HomePage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 домашней страницы.")
        super(HomePage, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = 'Домашняя страница'
        verbose_name_plural = 'Домашние страницы'


# Модель блока "О компании"
class HomeAboutCompany(models.Model):
    description1 = models.TextField(verbose_name="Описание 1")
    description2 = models.TextField(verbose_name="Описание 2")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and HomeAboutCompany.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 блока о компании на домашней странице.")
        super(HomeAboutCompany, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f"О компании (ID: {self.pk})"
    
    class Meta:
        verbose_name = 'О компании'
        verbose_name_plural = 'О компании'


# Модель блока "Наши преимущества"
class HomeAdvantage(models.Model):
    description1 = models.TextField(verbose_name="Описание 1")
    description2 = models.TextField(verbose_name="Описание 2")
    description3 = models.TextField(verbose_name="Описание 3")
    description4 = models.TextField(verbose_name="Описание 4")
    description5 = models.TextField(verbose_name="Описание 5")
    description6 = models.TextField(verbose_name="Описание 6")
    description7 = models.TextField(verbose_name="Описание 7")
    description8 = models.TextField(verbose_name="Описание 8")
    description9 = models.TextField(verbose_name="Описание 9")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    def save(self, *args, **kwargs):
        if not self.pk and HomeAdvantage.objects.count() >= 1:
            raise ValidationError("Вы не можете создать более 1 блока о преимуществах на домашней странице.")
        super(HomeAdvantage, self).save(*args, **kwargs)

    def __str__(self) -> str:
        return f"Преимущества (ID: {self.pk})"

    class Meta:
        verbose_name = 'Наши преимущества'
        verbose_name_plural = 'Наши преимущества'
