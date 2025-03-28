from django.contrib import admin
from .models import *



@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at', 'updated_at', 'slug')
    list_filter = ('category', 'created_at')
    search_fields = ('title', 'description', 'tags')
    ordering = ('-created_at',)

admin.site.register(BlogCategory)

class EventTextInline(admin.TabularInline):
    model = EventInformations
    extra = 1  # Number of extra forms to display
    fields = ('order', 'text',)
    ordering = ('order',)

@admin.register(EventInformations)
class EventTextAdmin(admin.ModelAdmin):
    list_display = ('event', 'order',)
    list_filter = ('event',)
    ordering = ('order',)