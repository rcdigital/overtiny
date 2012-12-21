from django.db import models

class User(models.Model):
    name        = models.CharField( max_length = 200)
    email       = models.EmailField( max_length = 200)
    password    = models.CharField(max_length = 150)
    created     = models.DateTimeField('date published')

    class Meta : 
        app_label = 'application'
