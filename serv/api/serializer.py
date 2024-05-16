from rest_framework import serializers
from .models import SportModel

class SportSerializer(serializers.ModelSerializer):
    class Meta:
        model = SportModel
        fields ='__all__'