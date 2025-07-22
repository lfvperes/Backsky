from django.http import HttpRequest, JsonResponse
from rest_framework import viewsets
from .models import City
from .serializers import CitySerializer, CityRetrieveSerializer, CityCreateSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .filters import CityFilter

# Create your views here.

def example(request: HttpRequest):
    city = {
        'id': 1720002,
        'name': 'Santa Terezinha do Tocantins',
        'population': 2463,
        'gentilic': 'terezinense do tocantins',
        'used': False
    }
    return JsonResponse(city)


class GetCityData(viewsets.ModelViewSet):
    queryset = City.objects.all()
    filterset_class = CityFilter
    def get_serializer_class(self):
        # Return a custom serializer
        if self.action in ['list','retrieve']:
            return CityRetrieveSerializer
        else:
            return CityCreateSerializer

@api_view(['GET', 'POST'])
def randomize(request: HttpRequest):
    """
    Handles fetching a random city.

    GET:
    - Safely returns a random city without changing any data.
    - Suitable for public display or read-only applications.

    POST:
    - Returns a random city and allows for updating the 'used' field.
    - Expects a JSON body {"update_used": true} to mark the city as used.
    - If 'update_used' is true the city will be marked as used.
    - Suitable for internal applications that need to track state.
    """
    if request.method == 'GET':
        random_city = City.objects.order_by('?').first()
        if not random_city:
            return Response({"error": "No cities in database"}, status=404)

        # Serialize and return the data. No data is ever changed.
        serializer = CityRetrieveSerializer(random_city)
        return Response(serializer.data)

    elif request.method == 'POST':
        # Check the request's JSON body for the 'update_used' flag.
        should_update = request.data.get('update_used', False)

        # First try to find a city that has NOT been used yet.
        random_city = City.objects.filter(used=False).order_by('?').first()

        # If not possible, retrieve any random city as a fallback.
        if not random_city:
            random_city = City.objects.order_by('?').first()

        # If the database is completely empty.
        if not random_city:
            return Response({"error": "No cities in database"}, status=404)

        # If the client asked to update unused city, save the change to database.
        if should_update and not random_city.used:
            random_city.used = True
            random_city.save()

        # Return the final state of the city.
        serializer = CityCreateSerializer(random_city)
        return Response(serializer.data)
