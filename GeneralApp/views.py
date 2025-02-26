from django.shortcuts import render
from mediaTeam.models import *

def index(request):
    events = Event.objects.all()
    return render(request, 'index.html', {'events': events})

def about(request):
    return render(request, 'about.html')

def career(request):
    return render(request, 'carrer.html')  # Check spelling (should it be "career.html"?)

def privacy(request):
    return render(request, 'privacy.html')

def updates(request):
    return render(request, 'updates.html')

def work(request):
    return render(request, 'work.html')

def single_work(request):
    return render(request, 'singleWork.html')
