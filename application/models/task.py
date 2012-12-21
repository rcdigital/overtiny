from django.db import models
from application.models.user import User
from application.models.company import Company

class Task(models.Model):
    user = models.ForeignKey(User)
    company = models.ForeignKey(Company)
    task_name = models.CharField(max_length = 200)
    time_spent = models.TimeField()

    class Meta : 
        app_label = 'application'
