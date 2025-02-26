from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    # Fields to display in the table
    list_display = [
        "title",
        "date",
        "pastEvent",
        "showCase",
    ]
    
    # Make boolean fields editable directly in the table
    list_editable = ["pastEvent", "showCase"]
    
    # Add filters for boolean fields and date
    list_filter = ["pastEvent", "showCase", "date"]
    
    # Enable search by title or description
    search_fields = ["title", "description"]
    
    # Default sorting (newest first)
    ordering = ["-date"]