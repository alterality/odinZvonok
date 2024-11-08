from django.utils import timezone
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.template.loader import render_to_string
from .forms import ServiceRequestForm
from .tasks import send_email_task
from .models import ServiceRequest

def service_request_view(request):
    if request.method == 'POST':
        form = ServiceRequestForm(request.POST)
        phone_number = request.POST.get('phone_number')
        if phone_number:
            last_request = ServiceRequest.objects.filter(phone_number=phone_number).order_by('-created_at').first()
            if last_request and not last_request.can_send_request():
                return render(request, 'forum/service_request.html', {
                    'form': form,
                    'error': 'Пожалуйста, подождите 5 минут перед повторной отправкой заявки.'
                })
        else:
            return render(request, 'forum/service_request.html', {
                'form': form,
                'error': 'Пожалуйста, введите номер телефона.'
            })

        if form.is_valid():
            confirm = request.POST.get('confirm')
            if confirm == 'yes':
                service_request = form.save()
                send_email_task.delay(service_request.id)
                return redirect('success')
            elif confirm == 'no':
                return render(request, 'forum/service_request.html', {'form': form})
            else:
                return render(request, 'forum/confirm_service_request.html', {'form': form})
    else:
        form = ServiceRequestForm()

    return render(request, 'forum/service_request.html', {'form': form})

def send_service_request_email(service_request):
    subject = "Новая заявка на услугу"
    html_message = render_to_string('forum/email_template.html', {'service_request': service_request})
    send_mail(subject, "", 'from@example.com', ['to@example.com'], html_message=html_message)

def success_view(request):
    return render(request, 'forum/success.html')
