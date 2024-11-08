from django.http import JsonResponse
import asyncio

async def async_view(request):
    await asyncio.sleep(1) 
    return JsonResponse({"message": "Hello, async world!"})
