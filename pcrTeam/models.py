from django.db import models
from django.utils.text import slugify
from tinymce.models import HTMLField
from django.db import IntegrityError, transaction

# Create your models here.

class Event(models.Model):
    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
    ]
     
    title = models.CharField(max_length=150)
    date = models.DateField(auto_now=False, auto_now_add=False)
    tags = models.CharField(max_length=150, help_text="Seprate the tag with comma")
    description = models.TextField(max_length=450, blank=True, default='', help_text="Enter 10 words description only")
    detail_description = HTMLField(blank=True)
    slug = models.SlugField(unique=True, blank=True, help_text="keep empty")
    imgBanner = models.ImageField(upload_to='event_Banner/')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='upcoming')
    link = models.URLField(blank=True, null=True, help_text="Add event link (only for upcoming and ongoing events)")
    showCase = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            num = 1
            while True:
                try:
                    with transaction.atomic():
                        return super().save(*args, **kwargs)
                except IntegrityError as e:
                    if 'slug' in str(e).lower():
                        self.slug = f"{slugify(self.title)}-{num}"
                        num += 1
                    else:
                        raise
        else:
            return super().save(*args, **kwargs)

    def __str__(self):
        return self.title