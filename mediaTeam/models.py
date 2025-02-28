from django.db import models
from django.utils.text import slugify
from contentTeam.models import Event as contentEvent
from tinymce.models import HTMLField
from django.core.validators import URLValidator
from django.utils.html import mark_safe

class SocialMediaLink(models.Model):
    """
    Model to store social media links for the club or organization.
    """
    # Choices for social media platforms
    PLATFORM_CHOICES = [
        ('facebook', 'Facebook'),
        ('twitter', 'Twitter'),
        ('instagram', 'Instagram'),
        ('linkedin', 'LinkedIn'),
        ('youtube', 'YouTube'),
        ('github', 'GitHub'),
        ('website', 'Website'),
    ]

    platform = models.CharField(
        max_length=20,
        choices=PLATFORM_CHOICES,
        help_text="The social media platform."
    )
    url = models.URLField(
        help_text="The URL of the social media profile or page."
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        help_text="The date and time when the link was added."
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        help_text="The date and time when the link was last updated."
    )

    def __str__(self):
        return f"{self.get_platform_display()} - {self.url}"

    class Meta:
        verbose_name = "Social Media Link"
        verbose_name_plural = "Social Media Links"

class Event(models.Model):
    events = models.ForeignKey(contentEvent, verbose_name=("content_event"), on_delete=models.CASCADE)
    
    hero_Image = models.ImageField(upload_to='event_images')  # Migrated from EventImage
    
    def __str__(self):
        return self.events.title

class SectionContent(models.Model):
    SECTION_TYPE_CHOICES = [                      # Moved from EventImage
        ('single', 'Single'),
        ('double', 'Double'),
        ('sticky', 'Sticky'),
    ]
    
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name="sections")  # Updated ForeignKey
    section_type = models.CharField(max_length=10, choices=SECTION_TYPE_CHOICES)
    order = models.PositiveIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.section_type} section for {self.event.events.title} (#{self.order})"

class MediaContent(models.Model):
    MEDIA_TYPE_CHOICES = [
        ('image', 'Image'),
        ('video', 'Video'),
        ('text', 'Text'),
    ]
    ASPECT_RATIO_CHOICES = [
        ('16/9', '16:9'),
        ('3/4', '3:4'),
        ('8/9', '8:9')
    ]
    
    section = models.ForeignKey(SectionContent, on_delete=models.CASCADE, related_name="media_items")
    media_type = models.CharField(max_length=10, choices=MEDIA_TYPE_CHOICES)
    aspect_ratio = models.CharField(max_length=10, choices=ASPECT_RATIO_CHOICES, blank=True)
    order = models.PositiveIntegerField(default=0)
    position = models.CharField(max_length=10, blank=True, help_text="For double sections: 'left' or 'right'")
    
    # Image fields
    image = models.ImageField(upload_to="Event-Images/", blank=True, null=True)
    image_alt = models.CharField(max_length=255, blank=True)
    
    # Video fields
    video = models.FileField(upload_to="Event-Videos/", blank=True, null=True)
    video_poster = models.ImageField(upload_to="Event-Video-Posters/", blank=True, null=True)
    
    # Text content (for sticky sections)
    info = HTMLField(blank=True)

    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.media_type} for {self.section}"