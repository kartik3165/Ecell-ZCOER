from django.db import models
from django.core.validators import EmailValidator, URLValidator

class ClubInfo(models.Model):
    """
    Model to store the club's vision, mission, and goals.
    """
    general = models.TextField(help_text="The general message.")
    vision1 = models.TextField(help_text="The vision of the club.")
    vision2 = models.TextField(help_text="The vision of the club.")
    mission1 = models.TextField(help_text="The mission of the club.")
    mission2 = models.TextField(help_text="The mission of the club.")
    goals1 = models.TextField(help_text="The goals of the club.")
    goals2 = models.TextField(help_text="The goals of the club.")
    link = models.URLField( validators=[URLValidator()], null=True, blank=True, help_text="Team register link")
    updated_at = models.DateTimeField(auto_now=True, help_text="The date and time when the information was last updated.")

    def __str__(self):
        return f"Club Info (Last Updated: {self.updated_at})"

    class Meta:
        verbose_name = "Club Information"
        verbose_name_plural = "Club Information"

class ContactInfo(models.Model):
    """
    Model to store the club's contact information.
    """
    email = models.EmailField(help_text="The email address of the club.")
    phone_number = models.CharField(max_length=20, help_text="The phone number of the club.")
    address = models.TextField(help_text="The physical address of the club.")
    website = models.URLField(blank=True, null=True, help_text="The website URL of the club.")
    updated_at = models.DateTimeField(auto_now=True, help_text="The date and time when the contact information was last updated.")

    def __str__(self):
        return f"Contact Info (Last Updated: {self.updated_at})"

    class Meta:
        verbose_name = "Contact Information"
        verbose_name_plural = "Contact Information"


    class Meta:
        verbose_name = "Registered Startup"
        verbose_name_plural = "Registered Startups"

    name= models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class HyperLink(models.Model):
    title = models.CharField(max_length=150)
    info = models.CharField(max_length=150)
    link = models.URLField( validators=[URLValidator()], null=True, blank=True)

