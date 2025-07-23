from django_filters import rest_framework as filters
from .models import City

class CityFilter(filters.FilterSet):
    state_code = filters.CharFilter(method='filter_by_state_code', label='Filter by the first two digits of the city ID (State Code)')

    class Meta:
        model = City
        fields = ['state', 'used', 'id', 'name'] 

    def filter_by_state_code(self, queryset, name, value):
        """
        Filters the queryset for cities where the 'id' field starts
        with the provided two-digit state code.
        """
        return queryset.filter(id__startswith=value)
