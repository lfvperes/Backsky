# from dataclasses import fields
from rest_framework import serializers 
from .models import City

class CitySerializer(serializers.ModelSerializer):
    class Meta:  # pyright: ignore[reportIncompatibleVariableOverride]
        model = City
        # fields = ['name','population', 'gentilic']
        fields = '__all__'