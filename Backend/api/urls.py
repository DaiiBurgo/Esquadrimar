from django.urls import path, include

app_name = 'api'

urlpatterns = [
    path('users/', include('users.urls')),
    path('contact/', include('contact.urls')),
    path('gallery/', include('gallery.urls')),
] 