from django.db import models
from django.contrib.auth.models import AbstractUser

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
