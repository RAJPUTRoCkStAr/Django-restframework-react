from django.db import models

# Create your models here.
class SportModel(models.Model):
    name = models.CharField(max_length=28)
    jersey_no = models.IntegerField()
    salary = models.IntegerField()
    country_name = models.CharField(max_length=80)
    occupation = models.CharField(max_length=85)
    gender = models.CharField(max_length=10,default='m')
    profile_image = models.ImageField(upload_to='profiles')
