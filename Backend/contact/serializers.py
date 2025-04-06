from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'email', 'phone', 'subject', 'message', 'created_at', 'read')
        read_only_fields = ('id', 'created_at', 'read')


class ContactCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'phone', 'subject', 'message')
    
    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError("O e-mail é obrigatório.")
        return value
    
    def validate_phone(self, value):
        if not value:
            raise serializers.ValidationError("O telefone é obrigatório.")
        return value 