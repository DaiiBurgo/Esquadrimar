from django.db import models

# Create your models here.

class Contact(models.Model):
    """
    Modelo para armazenar os contatos enviados através do formulário.
    """
    name = models.CharField(max_length=100, verbose_name='Nome')
    email = models.EmailField(verbose_name='E-mail')
    phone = models.CharField(max_length=20, verbose_name='Telefone')
    subject = models.CharField(max_length=200, verbose_name='Assunto')
    message = models.TextField(verbose_name='Mensagem')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Envio')
    read = models.BooleanField(default=False, verbose_name='Lido')
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contato'
        verbose_name_plural = 'Contatos'
    
    def __str__(self):
        return f"{self.name} - {self.subject}"
