from rest_framework import serializers
from .models import Category, Image


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'description', 'created_at')
        read_only_fields = ('id', 'created_at', 'slug')


class ImageListSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Image
        fields = ('id', 'title', 'image', 'category', 'category_name', 'featured', 'created_at')
        read_only_fields = ('id', 'created_at')


class ImageDetailSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    
    class Meta:
        model = Image
        fields = ('id', 'title', 'description', 'image', 'category', 'category_name', 'featured', 'created_at')
        read_only_fields = ('id', 'created_at')


class ImageCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('title', 'description', 'image', 'category', 'featured')
    
    def validate_image(self, value):
        if value.size > 5 * 1024 * 1024:  # 5MB
            raise serializers.ValidationError("A imagem não pode ter mais de 5MB.")
        return value 