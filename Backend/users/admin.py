from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import Profile


class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'Perfis'


class CustomUserAdmin(UserAdmin):
    inlines = (ProfileInline,)
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'get_phone')
    
    def get_phone(self, obj):
        return obj.profile.phone if hasattr(obj, 'profile') else ''
    get_phone.short_description = 'Telefone'


# Desregistra o UserAdmin padrão
admin.site.unregister(User)
# Registra o CustomUserAdmin
admin.site.register(User, CustomUserAdmin)
