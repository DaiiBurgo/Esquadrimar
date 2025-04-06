from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    """
    Modelo para categorias de imagens na galeria.
    """
    name = models.CharField(max_length=100, unique=True, verbose_name='Nome')
    slug = models.SlugField(max_length=100, unique=True, verbose_name='Slug')
    description = models.TextField(blank=True, null=True, verbose_name='Descrição')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Criação')
    
    class Meta:
        ordering = ['name']
        verbose_name = 'Categoria'
        verbose_name_plural = 'Categorias'
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.name


class Image(models.Model):
    """
    Modelo para imagens na galeria.
    """
    title = models.CharField(max_length=200, verbose_name='Título')
    description = models.TextField(blank=True, null=True, verbose_name='Descrição')
    image = models.ImageField(upload_to='gallery/', verbose_name='Imagem')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='images', verbose_name='Categoria')
    featured = models.BooleanField(default=False, verbose_name='Destaque')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Data de Upload')
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Imagem'
        verbose_name_plural = 'Imagens'
    
    def __str__(self):
        return self.title
