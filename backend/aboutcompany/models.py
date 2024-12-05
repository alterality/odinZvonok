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