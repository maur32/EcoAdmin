from django.db import models
from django.contrib.auth.models import User


class Gathering(models.Model):
    title = models.CharField(max_length=100)
    material_name = models.TextField()
    material_type = models.TextField()
    material_description = models.TextField()
    material_state = models.TextField()
    location_street = models.TextField()
    location_city = models.TextField()
    location_state = models.TextField()
    location_country = models.TextField()
    location_number = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    date = models.DateTimeField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="gatherings")
    
    def __str__(self):
        return self.title
