from celery import shared_task
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings
from .models import ServiceRequest

@shared_task
def send_email_task(service_request_id):
    try:
        service_request = ServiceRequest.objects.get(id=service_request_id)
        subject = "Новая заявка на услугу"
        html_message = render_to_string('forum/email_template.html', {'service_request': service_request})

        send_mail(
            subject,
            '', 
            settings.DEFAULT_FROM_EMAIL,
            ['rordufe@gmail.com'],
            html_message=html_message,
        )
    except ServiceRequest.DoesNotExist:
        print(f"ServiceRequest с ID {service_request_id} не найден.")

