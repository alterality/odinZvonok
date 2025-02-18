# from celery import shared_task
# from django.core.mail import send_mail
# from django.template.loader import render_to_string
# from django.conf import settings
# from .models import ServiceRequest

from celery import shared_task
from OneCall.celery import app
from .models import Application, BusinessApplication
from django.core.mail import EmailMessage
from django.conf import settings
import re

# @shared_task
# def send_email_task(service_request_id):
#     try:
#         service_request = ServiceRequest.objects.get(id=service_request_id)
#         subject = "Новая заявка на услугу"
#         html_message = render_to_string('forum/email_template.html', {'service_request': service_request})

#         send_mail(
#             subject,
#             '', 
#             settings.DEFAULT_FROM_EMAIL,
#             ['rordufe@gmail.com'],
#             html_message=html_message,
#         )
#     except ServiceRequest.DoesNotExist:
#         print(f"ServiceRequest с ID {service_request_id} не найден.")


def sanitize_email(email):
    # Убираем новые строки и пробелы в начале и конце
    return re.sub(r'[\r\n]+', '', email.strip())



@shared_task
def send_application(application_id):
    application = Application.objects.get(pk=application_id)
    email = application.email
    name = application.name
    phone_number = application.phone_number
    content = application.content

    subject = 'Уведомление о новой заявке'
    message = f'{name} оставил заявку на услуги\n\nТекст заявки: "{content}"\n\nЕго email: "{email}"\n\nЕго номер телефона: "{phone_number}"'
    from_email = sanitize_email('rordufe@gmail.com')
    recipient_list = [sanitize_email('bagishan01@gmail.com'), sanitize_email('odinzvonok845@gmail.com')]

    email_message = EmailMessage(subject, message, from_email, recipient_list)

    email_message.send()


@shared_task
def send_bsiness_application(application_id):
    application = BusinessApplication.objects.get(pk=application_id)
    company_type = application.company_type
    company_name = application.company_name
    phone_number = application.phone_number
    contact_person = application.contact_person
    site = application.site
    content = application.content

    subject = 'Уведомление о новой заявке'
    message = f'{company_name} оставил заявку на услуги\n\nТип компании: "{company_type}"\n\nТекст заявки: "{content}"\n\nКонтактное лицо: "{contact_person}"\n\nКонтактные данные: "{phone_number}"\n\nИх сайт: "{site}"'
    from_email = sanitize_email('rordufe@gmail.com')
    recipient_list = [sanitize_email('bagishan01@gmail.com'), sanitize_email('odinzvonok845@gmail.com')]

    email_message = EmailMessage(subject, message, from_email, recipient_list)

    email_message.send()