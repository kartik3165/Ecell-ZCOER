from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import *
# Register your models here.

from django.contrib import admin


class CustomUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'department', 'designation', 'year', 'contact_number')
    list_filter = ('department', 'designation', 'year')
    search_fields = ('username', 'email', 'contact_number')
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'profile_photo', 'contact_number', 'linkedin_profile')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
        ('Additional info', {'fields': ('department', 'designation', 'year')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2', 'email', 'first_name', 'last_name', 'department', 'designation', 'year', 'profile_photo', 'contact_number', 'linkedin_profile'),
        }),
    )


@admin.register(FacultyMember)
class FacultyAdmin(admin.ModelAdmin):
    list_display = ('name', 'designation', 'photo') 
    list_display_links = ('name',) 
    search_fields = ('name', 'designation')  
    list_per_page = 10 

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Department)
admin.site.register(Designation)

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


