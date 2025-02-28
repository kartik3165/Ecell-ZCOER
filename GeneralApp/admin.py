from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(ClubInfo)
admin.site.register(ContactInfo)
@admin.register(RegisterStartups)
class RegisterStartupsAdmin(admin.ModelAdmin):
    # Fields to display in the tabular view
    list_display = (
        'startup_name',
        'founder_name',

        'college_department',
        'college_year',
        'is_approved',
        'registration_date',
    )

    # Add filters for these fields
    list_filter = (
        'is_approved',
        'college_department',
        'college_year',
    )

    # Add search functionality for these fields
    search_fields = (
        'startup_name',
        'founder_name',
        'college_department',
    )

    # Enable editing of the 'is_approved' field directly from the list view
    list_editable = ('is_approved',)

    # Set the number of items per page in the admin list view
    list_per_page = 20

    # Add a date hierarchy for the 'registration_date' field
    date_hierarchy = 'registration_date'