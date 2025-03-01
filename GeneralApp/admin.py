from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(ClubInfo)
admin.site.register(ContactInfo)
@admin.register(HyperLink)
class HyperLinkAdmin(admin.ModelAdmin):
    list_display = ('title', 'info', 'link')  # Display these fields in table format
    search_fields = ('title', 'info')  # Add a search bar for title and info
    list_filter = ('title',) 