from django.http import HttpRequest, JsonResponse
from django.shortcuts import render

# Create your views here.

def random_city_data(request: HttpRequest):
    city = {
        'id': 1720002,
        'name': 'Santa Terezinha do Tocantins',
        'population': 2463,
        'gentilic': 'terezinense do tocantins',
        'used': False
    }
    return JsonResponse(city)