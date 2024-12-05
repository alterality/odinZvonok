from django.utils import timezone
from django.db import models

class ServiceRequest(models.Model):
    full_name = models.CharField(max_length=255)
    service_type = models.CharField(max_length=100)
    description = models.TextField()
    phone_number = models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name

    def can_send_request(self):
        return (timezone.now() - self.created_at).total_seconds() > 10
