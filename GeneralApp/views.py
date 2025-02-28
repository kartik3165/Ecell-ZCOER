from django.shortcuts import get_object_or_404, render
from mediaTeam.models import Event as MediaEvent, SectionContent, MediaContent, SocialMediaLink
from contentTeam.models import *
from GeneralApp.models import *
from technicalTeam.models import *

def index(request):
    events = Event.objects.all()
    socialLinks = SocialMediaLink.objects.all()
    info = ClubInfo.objects.first()
    contact = ContactInfo.objects.first()
    
    return render(request, 'index.html', {
        'events' : events,
        'info' : info,
        'contact' : contact,
        'socialLink' : socialLinks
        })

def about(request):
    info = ClubInfo.objects.first()
    startup = RegisterStartups.objects.all()
    faculty = FacultyMember.objects.all()
    team = CustomUser.objects.all()

    return render(request, 'about.html', {
        'info' : info,
        'startup' : startup,
        'faculty' : faculty,
        'team' : team
    })

def career(request):
    return render(request, 'carrer.html')  

def privacy(request):
    return render(request, 'privacy.html')

def updates(request):
    return render(request, 'updates.html')

def work(request):
    event = Event.objects.all()
    return render(request, 'work.html', {'event' : event})

def single_work(request,slug):
    event = get_object_or_404(MediaEvent, events__slug = slug)
    portfolio_content = get_object_or_404(
        MediaEvent.objects.prefetch_related('sections__media_items'), 
        events__slug = slug
    )
    tag_list = event.events.tags.split(",")

    return render(request, 'singleWork.html', {
        'event' : event,
        'portfolio_content' : portfolio_content,
        'tag_list' : tag_list
    })

