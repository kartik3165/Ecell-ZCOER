from django.urls import path
from django.conf import settings
from GeneralApp import views  # Import views from the same app
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('career/', views.career, name='career'),
    path('privacy/', views.privacy, name='privacy'),
    path('updates/', views.updates, name='updates'),
    path('work/', views.work, name='work'),
    path('single-work/', views.single_work, name='single_work'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)