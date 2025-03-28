from django.db import models
from django.utils.text import slugify
from pcrTeam.models import Event
from GeneralApp.models import Achivement
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


class EventImage(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='event_images')
    image = models.ImageField(upload_to='event_images/')
    alt_text = models.CharField(max_length=255, blank=True)


    def __str__(self):
        return f"{self.event.title} img No. {self.event.id}"
class EventVideo(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='event_videos')
    youtube_url = models.URLField()

    def embed_video(self):
        if "youtube.com" in self.youtube_url or "youtu.be" in self.youtube_url:
            return mark_safe(f'<iframe width="560" height="315" src="https://www.youtube.com/embed/{self.extract_video_id()}" frameborder="0" allowfullscreen></iframe>')
        return "Invalid YouTube URL"

    def extract_video_id(self):
        """Extract video ID from YouTube URL."""
        if "youtu.be" in self.youtube_url:
            return self.youtube_url.split("/")[-1]
        elif "youtube.com" in self.youtube_url:
            return self.youtube_url.split("v=")[-1].split("&")[0]
        return ""

    def __str__(self):
        return f" {self.event.title} video No. {self.event.id}"

class AchivementImage(models.Model):
    event = models.ForeignKey(Achivement, on_delete=models.CASCADE, related_name='event_images')
    image = models.ImageField(upload_to='event_images/')
    alt_text = models.CharField(max_length=255, blank=True)


    def __str__(self):
        return f"{self.event.title} img No. {self.event.id}"
class AchivementVideo(models.Model):
    event = models.ForeignKey(Achivement, on_delete=models.CASCADE, related_name='event_videos')
    youtube_url = models.URLField()

    def embed_video(self):
        if "youtube.com" in self.youtube_url or "youtu.be" in self.youtube_url:
            return mark_safe(f'<iframe width="560" height="315" src="https://www.youtube.com/embed/{self.extract_video_id()}" frameborder="0" allowfullscreen></iframe>')
        return "Invalid YouTube URL"

    def extract_video_id(self):
        """Extract video ID from YouTube URL."""
        if "youtu.be" in self.youtube_url:
            return self.youtube_url.split("/")[-1]
        elif "youtube.com" in self.youtube_url:
            return self.youtube_url.split("v=")[-1].split("&")[0]
        return ""

    def __str__(self):
        return f" {self.event.title} video No. {self.event.id}"
