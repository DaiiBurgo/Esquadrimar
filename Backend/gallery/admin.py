from django.contrib import admin
from .models import Category, Image


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'description', 'created_at')
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}
    date_hierarchy = 'created_at'


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'created_at', 'featured')
    list_filter = ('category', 'featured', 'created_at')
    search_fields = ('title', 'description')
    date_hierarchy = 'created_at'
    readonly_fields = ('created_at',)
    list_editable = ('featured',)
    
    def mark_as_featured(self, request, queryset):
        queryset.update(featured=True)
    mark_as_featured.short_description = "Marcar como destaque"
    
    def unmark_as_featured(self, request, queryset):
        queryset.update(featured=False)
    unmark_as_featured.short_description = "Desmarcar como destaque"
    
    actions = ['mark_as_featured', 'unmark_as_featured']
