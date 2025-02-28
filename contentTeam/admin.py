from django.contrib import admin
from .models import *

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    # Fields to display in the table
    list_display = [
        "title",
        "date",
        "status",
        "showCase",
    ]
    
    # Make boolean fields editable directly in the table
    list_editable = ["showCase"]
    
    # Add filters for boolean fields and date
    list_filter = ["status","date"]
    
    # Enable search by title or description
    search_fields = ["title", "description"]
    
    # Default sorting (newest first)
    ordering = ["-date"]

