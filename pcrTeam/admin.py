from django.contrib import admin
from .models import *

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = [
        "title",
        "date",
        "status",
        "showCase",
    ]

    list_editable = ["showCase"]
    list_filter = ["status","date"]
    search_fields = ["title"]
    ordering = ["-date"]
