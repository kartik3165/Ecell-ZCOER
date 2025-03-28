from django.contrib import admin
from .models import *

@admin.register(SocialMediaLink)
class SocialMediaLinkAdmin(admin.ModelAdmin):
    list_display = ('platform', 'url', 'created_at', 'updated_at')
    list_filter = ('platform',)
    search_fields = ('platform', 'url')


class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 1  # Number of extra forms to display
    fields = ('image', 'alt_text')

@admin.register(EventImage)
class EventImageAdmin(admin.ModelAdmin):
    list_display = ('event', 'image', 'alt_text',)
    list_filter = ('event',)


class VideoAdmin(admin.ModelAdmin):
    list_display = ("id", "youtube_url", "video_preview")

    def video_preview(self, obj):
        return obj.embed_video()

    video_preview.allow_tags = True
    video_preview.short_description = "Preview"

admin.site.register(EventVideo, VideoAdmin)

class AchivementImageInline(admin.TabularInline):
    model = AchivementImage
    extra = 1  # Number of extra forms to display
    fields = ('image', 'alt_text')

@admin.register(AchivementImage)
class AchivementImageAdmin(admin.ModelAdmin):
    list_display = ('event', 'image', 'alt_text',)
    list_filter = ('event',)


class AchivementVideoAdmin(admin.ModelAdmin):
    list_display = ("id", "youtube_url", "video_preview")

    def video_preview(self, obj):
        return obj.embed_video()

    video_preview.allow_tags = True
    video_preview.short_description = "Preview"

admin.site.register(AchivementVideo, AchivementVideoAdmin)
