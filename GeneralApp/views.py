from django.shortcuts import get_object_or_404, render
from mediaTeam.models import EventImage, SocialMediaLink, EventVideo , AchivementImage, AchivementVideo
from contentTeam.models import *
from pcrTeam.models import Event
from GeneralApp.models import *
from technicalTeam.models import *
from django.views.generic import ListView, DetailView

def index(request):
    events = Event.objects.all()
    socialLinks = SocialMediaLink.objects.all()
    info = ClubInfo.objects.first()
    contact = ContactInfo.objects.first()
    links = HyperLink.objects.all().order_by('-title')

    return render(request, 'index.html', {
        'events' : events,
        'info' : info,
        'contact' : contact,
        'socialLink' : socialLinks,
        'linkage' : links

        })

def about(request):
    info = ClubInfo.objects.first()
    startup = RegisterStartups.objects.all()
    faculty = FacultyMember.objects.all()
    team = CustomUser.objects.all()
    socialMediaLink = SocialMediaLink.objects.all()

    return render(request, 'about.html', {
        'info' : info,
        'startup' : startup,
        'faculty' : faculty,
        'team' : team,
        'socialLink' : socialMediaLink
    })

def work(request):
    event = Event.objects.all()
    return render(request, 'work.html', {'event' : event})

def single_work(request, slugs):
    event = get_object_or_404(Event, slug=slugs)
    allEvents = Event.objects.all()
    img = EventImage.objects.filter(event=event)
    tag_list = event.tags.split(",") if hasattr(event, 'tags') and event.tags else []
    video = EventVideo.objects.filter(event=event)
    socialMediaLink = SocialMediaLink.objects.all()

    return render(request, 'singleWork.html', {
        'event': event,
        'allEvents': allEvents,
        'tag_list': tag_list,
        'img_list' : img,
        'video_list' : video,
        'socialLink' : socialMediaLink
    })

def Blog(request):
    category = BlogCategory.objects.all()
    posts = BlogPost.objects.all().order_by('-created_at')
    socialMediaLink = SocialMediaLink.objects.all()

    return render(request, 'Blogs.html' ,{
        'blogs' : posts ,
        'categories' : category,
        'socialLink' : socialMediaLink
        })

def single_blog(request,slug):
    blog = get_object_or_404(BlogPost, slug=slug)
    tag_list = blog.tags.split(",")
    posts = BlogPost.objects.all()
    socialMediaLink = SocialMediaLink.objects.all()


    return render(request, 'singleBlog.html' ,{
        'blog' : blog,
        'tag_list' : tag_list,
        'post' : posts ,
        'socialLink' : socialMediaLink

    })
    
def achive(request):
    event = Achivement.objects.all()
    return render(request, 'achivement.html', {'event' : event})

def single_achivement(request, slug):
    event = get_object_or_404(Achivement, slug=slug)   
    allEvents = Achivement.objects.all()
    img = AchivementImage.objects.filter(event=event)
    video = AchivementVideo.objects.filter(event=event)
    socialMediaLink = SocialMediaLink.objects.all()

    return render(request, 'single_Achivement.html', {
        'event': event,
        'allEvents': allEvents,
        'img_list' : img,
        'video_list' : video,
        'socialLink' : socialMediaLink
    })


# def career(request):
#     return render(request, 'carrer.html')  

# def privacy(request):
#     return render(request, 'privacy.html')

# def updates(request):
#     return render(request, 'updates.html')
