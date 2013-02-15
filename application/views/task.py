from django.http  import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from django.core.context_processors import csrf
from django.utils import simplejson
from django.core import serializers
from application.forms import TaskForm
from social_auth.backends.google import GoogleBackend 

@login_required(login_url='/')
def index(request) :
    form = TaskForm()
    context = {'form':form}
    return render_to_response('task/index.html',context,context_instance = RequestContext(request))

def start_timer(request):
    if request.is_ajax():
        context = RequestContext(request);
        return render_to_response( 'task/start_timer.html',context)

def xhr_save_time(request):
    if request.is_ajax():
        context = RequestContext(request);
        return render_to_response( 'task/save_time.html',context)
