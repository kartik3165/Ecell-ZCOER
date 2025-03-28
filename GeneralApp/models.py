from django.db import models
from django.core.validators import EmailValidator, URLValidator
from django.utils.text import slugify
from tinymce.models import HTMLField
from django.db import IntegrityError, transaction

class ClubInfo(models.Model):
    main_img = models.ImageField(upload_to='header_img/')
    img_link = models.URLField( validators=[URLValidator()], null=True, blank=True, help_text="Image redirecting link")
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

class Achivement(models.Model):
    title = models.CharField(max_length=200)
    header_image = models.ImageField(upload_to='event_headers/')
    detail_description = HTMLField(blank=True)
    date = models.DateField(auto_now=False, auto_now_add=False)
    description = models.TextField(max_length=450, blank=True, default='', help_text="Enter 10 words description only")
    slug = models.SlugField(unique=True, blank=True, help_text="keep empty")

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
