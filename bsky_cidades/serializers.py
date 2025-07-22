# from dataclasses import fields
from rest_framework import serializers 
from .models import City

class CitySerializer(serializers.ModelSerializer):
    class Meta:  # pyright: ignore[reportIncompatibleVariableOverride]
        model = City
        # fields = ['name','population', 'gentilic']
        fields = '__all__'

class CityCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

class CityRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ['name','est_pop', 'gentilic','state']