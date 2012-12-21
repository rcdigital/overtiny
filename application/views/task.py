from django.http  import HttpResponse
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from application.models.user import User
from django.utils import simplejson
from django.core import serializers

@login_required(login_url='/')
def index(request) :

    context = RequestContext(request)
    return render_to_response( 'task/index.html',context)

def xhr_save_time(request):
    if request.is_ajax():
        context = RequestContext(request)
        return render_to_response( 'task/save_time.html',context)
