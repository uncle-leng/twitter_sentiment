from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect, HttpResponse
from couchdb.client import Server
from django.conf import settings
import json
# Create your views here.



def index(request):
    return HttpResponseRedirect('/test/')

def test(request):
    server = Server('http://43.240.96.132:5984/')
    documents = server['testdb']
    if request.method == 'GET':
        return render(request, 'test.html')
    if request.method == 'POST':
        x = {'haha': 'sdfgdfgf'}
        return HttpResponse(json.dumps(x))




