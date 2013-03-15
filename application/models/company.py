from django.db import models
from django.contrib.auth.models import User

class Company(models.Model):
    user        = models.ForeignKey(User)
    name        = models.CharField(max_length = 200)
    created     = models.DateTimeField('date published')

    class Meta : 
        app_label = 'application'
