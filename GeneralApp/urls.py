from django.urls import path
from django.conf import settings
from GeneralApp import views  # Import views from the same app
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('work/', views.work, name='work'),
    path('single-work/<str:slugs>', views.single_work, name='single_work'),
    path('blog/', views.Blog, name='blogs'),
    path('single-blog/<str:slug>', views.single_blog, name='single_blog'),
    path('achive/', views.achive, name='achive'),
    path('single-achivement/<str:slug>', views.single_achivement, name='single_achivement'),
    
    # path('career/', views.career, name='career'),
    # path('privacy/', views.privacy, name='privacy'),
    # path('updaes/', views.updates, name='updates'),

]



urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)