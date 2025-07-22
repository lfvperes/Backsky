"""Defines the URL patterns for the bsky_cidades application."""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GetCityData, randomize

router = DefaultRouter()
router.register(r'', GetCityData, basename='city')

urlpatterns = [
    # The specific path for your custom function must come FIRST.
    path('random/', randomize, name='city-random'),

    # The router's general paths come LAST.
    path('', include(router.urls)),
]