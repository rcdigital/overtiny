from django import forms
from django.contrib.auth.models import User


class UserForm(forms.Form):
    username = forms.CharField()
    email = forms.EmailField()
    pwd = forms.CharField( widget = forms.PasswordInput)
