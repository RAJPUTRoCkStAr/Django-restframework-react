#this is only for rest api purposes views 
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated,AllowAny
from .serializer import SportSerializer
from .models import SportModel
# Create your API views here.

class CreateSports(generics.CreateAPIView): #this is to create api and instance only
    queryset =SportModel.objects.all()
    serializer_class =SportSerializer
    permission_classes = [AllowAny]

class UpdateSport(generics.RetrieveUpdateAPIView): #this is to update api and instance only
    queryset =SportModel.objects.all()
    serializer_class =SportSerializer
    permission_classes = [AllowAny]

class DeleteSport(generics.RetrieveDestroyAPIView): #this is for deleting api and instance only
    queryset =SportModel.objects.all()
    serializer_class =SportSerializer
    permission_classes = [AllowAny]

class ListSport(generics.ListAPIView):      #this is to get all sports data at once
    queryset =SportModel.objects.all()
    serializer_class =SportSerializer
    permission_classes = [AllowAny]