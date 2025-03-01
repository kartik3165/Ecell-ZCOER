from django.shortcuts import get_object_or_404, render
from mediaTeam.models import  Event as MediaEvent, SectionContent, MediaContent, SocialMediaLink
from contentTeam.models import *
from pcrTeam.models import Event as ContentEvent
from GeneralApp.models import *
from technicalTeam.models import *
from django.views.generic import ListView, DetailView

def index(request):
    events = ContentEvent.objects.all()
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

    return render(request, 'about.html', {
        'info' : info,
        'startup' : startup,
        'faculty' : faculty,
        'team' : team,
    })

# def career(request):
#     return render(request, 'carrer.html')  

# def privacy(request):
#     return render(request, 'privacy.html')

# def updates(request):
#     return render(request, 'updates.html')

def work(request):
    event = ContentEvent.objects.all()
    return render(request, 'work.html', {'event' : event})

def single_work(request,slugs):
    content_event = get_object_or_404(ContentEvent, slug=slugs)
    media_event = get_object_or_404(
        MediaEvent.objects.prefetch_related('sections__media_items'),
        events=content_event  # Use the ForeignKey field 'events' pointing to ContentEvent
    )    
    allEvents = ContentEvent.objects.all()
    tag_list = content_event.tags.split(",")

    return render(request, 'singleWork.html', {
        'event' : content_event,
        'portfolio_content' : media_event,
        'tag_list' : tag_list,
        'allEvents' : allEvents
    })

def Blog(request):
    category = BlogCategory.objects.all()
    posts = BlogPost.objects.all().order_by('-created_at')
    return render(request, 'Blogs.html' ,{
        'blogs' : posts ,
        'categories' : category
        })

def single_blog(request,slug):
    blog = get_object_or_404(BlogPost, slug=slug)
    tag_list = blog.tags.split(",")
    posts = BlogPost.objects.all()

    return render(request, 'singleBlog.html' ,{
        'blog' : blog,
        'tag_list' : tag_list,
        'post' : posts
    })
