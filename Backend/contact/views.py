from django.shortcuts import render
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from .models import Contact
from .serializers import ContactSerializer, ContactCreateSerializer


class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all().order_by('-created_at')
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAdminUser]


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactCreateSerializer
    permission_classes = [permissions.AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {"detail": "Mensagem enviada com sucesso! Entraremos em contato em breve."},
            status=status.HTTP_201_CREATED
        )


class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def perform_update(self, serializer):
        serializer.save()
        return Response({"detail": "Contato atualizado com sucesso."})
    
    def perform_destroy(self, instance):
        instance.delete()
        return Response({"detail": "Contato excluído com sucesso."}, status=status.HTTP_204_NO_CONTENT)
