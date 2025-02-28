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

