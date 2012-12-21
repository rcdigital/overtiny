from django import forms
from application.models.task import Task


class TaskForm(forms.Form):
    user_id = forms.CharField(widget=forms.HiddenInput())
    task_name = forms.EmailField()
    client_name = forms.CharField()
