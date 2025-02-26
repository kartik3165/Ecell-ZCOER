from django.db import models
from django.utils.text import slugify


class Event(models.Model):
    title = models.CharField(max_length=150)
    date = models.DateField(auto_now=False, auto_now_add=False)
    description = models.TextField(max_length=450, blank=True, default='')
    pastEvent = models.BooleanField(default=True)
    showCase = models.BooleanField(default=False)
    slug = models.SlugField(unique=True, blank=True)
    imgBanner = models.ImageField(upload_to='event_Banner/')

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title) 
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title

class EventImage(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="images")  
    image = models.ImageField(upload_to=f'event_images') 

    def __str__(self):
        return f"Image for {self.event.title}"