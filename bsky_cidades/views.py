from django.http import HttpRequest, JsonResponse
from rest_framework import viewsets
from .models import City
from .serializers import CitySerializer, CityRetrieveSerializer, CityCreateSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    # serializer_class = CitySerializer
    def get_serializer_class(self):
        # Return a custom serializer
        if self.action in ['list','retrieve']:
            return CityRetrieveSerializer
        else:
            return CityCreateSerializer

@api_view(['GET'])
def randomize(request: HttpRequest):
    """
    Selects and returns a random city from the database.
    """
    random_city = City.objects.order_by('?').first()
    if random_city:
        serializer = CityRetrieveSerializer(random_city)
        return Response(serializer.data)
    return Response({"error": "No cities in database"}, status=404)
