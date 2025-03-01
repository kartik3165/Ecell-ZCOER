from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import EmailValidator, URLValidator

class Department(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Designation(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
   
    YEAR_CHOICES = [
        ('FE', 'First Year'),
        ('SE', 'Second Year'),
        ('TE', 'Third Year'),
        ('BE', 'Final Year'),
    ]

    department = models.ForeignKey(Department,on_delete=models.PROTECT, verbose_name="Department", null=True, blank=True)
    designation = models.ForeignKey(Designation, on_delete=models.CASCADE, verbose_name="Designation", null=True, blank=True)
    year = models.CharField(max_length=2, choices=YEAR_CHOICES, blank=True, null=True, verbose_name="Year")
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True, verbose_name="Profile Photo")
    linkedin_profile = models.URLField(blank=True, null=True, verbose_name="LinkedIn Profile")
    contact_number = models.CharField(max_length=15, blank=True, null=True, verbose_name="Contact Number")

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

class FacultyMember(models.Model):
    name = models.CharField(max_length=150)
    designation = models.CharField(max_length=250)
    photo = models.ImageField(upload_to='faculty_photos/', blank=True, null=True, verbose_name="Profile Photo")

    def __str__(self):
        return self.name


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
