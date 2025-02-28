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

class RegisterStartups(models.Model):
    # Choices for college year
    YEAR_CHOICES = [
        ('FE', 'First Year (FE)'),
        ('SE', 'Second Year (SE)'),
        ('TE', 'Third Year (TE)'),
        ('BE', 'Final Year (BE)'),
    ]

    # Basic Information
    startup_name = models.CharField(max_length=255, verbose_name="Startup Name")
    description = models.TextField(verbose_name="Description", help_text="Brief description of the startup")
    website = models.URLField(validators=[URLValidator()], null=True, blank=True, verbose_name="Website")

    # Founder Information
    founder_name = models.CharField(max_length=255, verbose_name="Founder Name")
    founder_email = models.EmailField(validators=[EmailValidator()], verbose_name="Founder Email")
    founder_phone = models.CharField(max_length=15, verbose_name="Founder Phone", null=True, blank=True)

    # College Information
    college_department = models.CharField(max_length=255, verbose_name="Department", null=True, blank=True)
    college_year = models.CharField(max_length=2, choices=YEAR_CHOICES, verbose_name="College Year", null=True, blank=True)

    # Additional Information
    registration_date = models.DateField(auto_now_add=True, verbose_name="Registration Date")
    is_approved = models.BooleanField(default=False, verbose_name="Approved")

    # Social Media Links (Optional)
    linkedin_url = models.URLField(validators=[URLValidator()], null=True, blank=True, verbose_name="LinkedIn URL")
    instagram_url = models.URLField(validators=[URLValidator()], null=True, blank=True, verbose_name="Instagram URL")
    twitter_url = models.URLField(validators=[URLValidator()], null=True, blank=True, verbose_name="Twitter URL")

    def __str__(self):
        return self.startup_name

    class Meta:
        verbose_name = "Registered Startup"
        verbose_name_plural = "Registered Startups"

    name= models.CharField(max_length=50)

    def __str__(self):
        return self.name

