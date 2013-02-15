from django.http  import HttpResponse, HttpResponseRedirect 
from django.contrib.auth import authenticate, login as auth_login , logout as auth_logout
from django.shortcuts import render_to_response
from django.core.context_processors import csrf
from application.forms import UserForm
from django.contrib.auth.models import User
import datetime
import bcrypt


def index(request) :
    form = UserForm()
    c = {'form' : form}
    c.update(csrf(request))
    return render_to_response( 'home/index.html',c )

def register(request):
    if request.method == 'POST' :
    	form = UserForm( request.POST)
    	if form.is_valid():
    		username = form.cleaned_data['username']
    		email = form.cleaned_data['email']
    		password = form.cleaned_data['pwd']
    		user = User.objects.create_user(username,email,password)
    		user.save()
    		return HttpResponse('Congratulations! your user as been created');

def access_channel(request):
	return HttpResponseRedirect('/tasks')

def logout(request):
    auth_logout(request)
    return HttpResponseRedirect('/')
