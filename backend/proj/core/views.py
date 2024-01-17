from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
def test(request):
    context = {
        'data': 'Hello World'
    }
    
    return JsonResponse(context)