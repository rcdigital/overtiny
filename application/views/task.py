from django.http  import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from django.core.context_processors import csrf
from django.utils import simplejson
from django.core import serializers
from application.forms import TaskForm
from social_auth.backends.google import GoogleBackend 
from application.models import Company, Task
from django.contrib.auth.models import User
from datetime import datetime

@login_required(login_url='/')
def index(request) :
    form = TaskForm()
    context = {'form':form}
    return render_to_response('task/index.html',context,context_instance = RequestContext(request))

def start_timer(request):
    if request.is_ajax():
    	try:
           company = Company.objects.get(name = request.POST['client'].title() )
        except Company.DoesNotExist:
            company = Company( name = request.POST['client'].title(), created = datetime.now(), user_id = request.user.id)
            company.save()

        task = Task(user_id = request.user.id, company_id = company.id, task_name = request.POST['taskName'], time_spent = '00:00:00')
        task.save()
        to_json = { "task_id" : task.id}
        return HttpResponse( simplejson.dumps(to_json), mimetype = 'application/json')

def xhr_save_time(request):
    if request.is_ajax():
        context = RequestContext(request);
        return render_to_response( 'task/save_time.html',context)
