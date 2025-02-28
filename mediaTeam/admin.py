from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(SocialMediaLink)
class SocialMediaLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url', 'created_at', 'updated_at')
    list_filter = ('platform',)
    search_fields = ('platform', 'url')


class MediaContentInline(admin.TabularInline):
    model = MediaContent
    extra = 1
    fields = [
        'media_type', 
        'aspect_ratio', 
        'position', 
        'order', 
        'image', 
        'image_alt', 
        'video', 
        'video_poster', 
        'info',
        'info_Image'
    ]

class SectionContentInline(admin.TabularInline):
    model = SectionContent
    extra = 1
    fields = ['section_type', 'order']
    # Note: Django admin does not support nested inlines by default.
    # To include MediaContent inline inside SectionContent inline, consider using a third-party package like django-nested-admin.

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    inlines = [SectionContentInline]
    list_display = ['id', 'get_title']
    search_fields = ['events__title']  # Allow searching by the related contentEvent title

    def get_title(self, obj):
        return obj.events.title
    get_title.short_description = 'Title'

@admin.register(SectionContent)
class SectionContentAdmin(admin.ModelAdmin):
    inlines = [MediaContentInline]
    list_display = ['section_type', 'get_event_title', 'order']
    list_filter = ['section_type']

    def get_event_title(self, obj):
        return obj.event.events.title
    get_event_title.short_description = 'Event Title'

@admin.register(MediaContent)
class MediaContentAdmin(admin.ModelAdmin):
    list_display = ['media_type', 'aspect_ratio', 'order', 'get_section']
    list_filter = ['media_type']

    def get_section(self, obj):
        return str(obj.section)
    get_section.short_description = 'Section'