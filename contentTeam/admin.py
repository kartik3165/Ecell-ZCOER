from django.contrib import admin
from .models import *



@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at', 'updated_at', 'slug')
    list_filter = ('category', 'created_at')
    search_fields = ('title', 'description', 'tags')
    ordering = ('-created_at',)

admin.site.register(BlogCategory)