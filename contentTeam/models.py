from django.db import models
from django.utils.text import slugify
from tinymce.models import HTMLField
from technicalTeam.models import CustomUser
from pcrTeam.models import Event

class BlogCategory(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name) 
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(BlogCategory, related_name='category', on_delete=models.CASCADE)
    description = models.CharField(max_length=150)
    blog = HTMLField(blank=True)
    tags = models.CharField(max_length=150, help_text="Seprate the tag with comma")
    hero_Img = models.ImageField(upload_to='Blog-Image/', height_field=None, width_field=None, max_length=None)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField(unique=True, blank=True, help_text="keep empty")

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title) 
        super().save(*args, **kwargs)

    
    def __str__(self):
        return self.title
    
class EventInformations(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='event_texts')
    order = models.PositiveIntegerField(default=0, help_text="Determines the display order")
    text = HTMLField(blank=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Text {self.order} for {self.event.title}"
