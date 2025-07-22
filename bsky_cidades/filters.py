from django_filters import rest_framework as filters
from .models import City

class CityFilter(filters.FilterSet):
    class Meta:
        model = City
        # Define the fields from your model that you want to enable filtering on.
        fields = {
            'state': ['exact'], # Allow exact matches, e.g., state='TO'
            'used': ['exact'],  # Allow exact matches, e.g., used=true
        }