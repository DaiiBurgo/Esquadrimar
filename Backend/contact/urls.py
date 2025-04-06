from django.urls import path
from .views import (
    ContactListView,
    ContactCreateView,
    ContactDetailView
)

app_name = 'contact'

urlpatterns = [
    path('', ContactListView.as_view(), name='list'),
    path('create/', ContactCreateView.as_view(), name='create'),
    path('<int:pk>/', ContactDetailView.as_view(), name='detail'),
] 