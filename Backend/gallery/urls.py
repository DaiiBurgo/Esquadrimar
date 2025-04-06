from django.urls import path
from .views import (
    CategoryListView,
    CategoryDetailView,
    ImageListView,
    ImageDetailView
)

app_name = 'gallery'

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('images/', ImageListView.as_view(), name='image-list'),
    path('images/<int:pk>/', ImageDetailView.as_view(), name='image-detail'),
] 