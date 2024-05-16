from django.urls import path
from .views import *

urlpatterns = [
    path('create/',CreateSports.as_view(),name='create'),
    path('update/<int:pk>/',UpdateSport.as_view(),name='update'),
    path('delete/<int:pk>/',DeleteSport.as_view(),name='delete'),
    path('list/',ListSport.as_view(),name='listdata')
]