import api from './api';

// Interfaces para a galeria
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface Image {
  id: number;
  title: string;
  description?: string;
  image: string;
  category: number;
  category_name: string;
  featured: boolean;
  created_at: string;
}

export interface ImageUpload {
  title: string;
  description?: string;
  image: File;
  category: number;
  featured: boolean;
}

// API da galeria
const galleryService = {
  // Categorias
  getCategories: async () => {
    try {
      const response = await api.get('/gallery/categories/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCategory: async (id: number) => {
    try {
      const response = await api.get(`/gallery/categories/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createCategory: async (categoryData: Omit<Category, 'id' | 'slug' | 'created_at'>) => {
    try {
      const response = await api.post('/gallery/categories/', categoryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCategory: async (id: number, categoryData: Partial<Omit<Category, 'id' | 'slug' | 'created_at'>>) => {
    try {
      const response = await api.put(`/gallery/categories/${id}/`, categoryData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCategory: async (id: number) => {
    try {
      const response = await api.delete(`/gallery/categories/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Imagens
  getImages: async (params?: { category?: string; featured?: boolean }) => {
    try {
      const response = await api.get('/gallery/images/', { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getImage: async (id: number) => {
    try {
      const response = await api.get(`/gallery/images/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  uploadImage: async (imageData: ImageUpload) => {
    // Criando FormData para upload de arquivo
    const formData = new FormData();
    formData.append('title', imageData.title);
    if (imageData.description) {
      formData.append('description', imageData.description);
    }
    formData.append('image', imageData.image);
    formData.append('category', imageData.category.toString());
    formData.append('featured', imageData.featured.toString());

    try {
      const response = await api.post('/gallery/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateImage: async (id: number, imageData: Partial<Omit<Image, 'id' | 'created_at' | 'image' | 'category_name'>> & { image?: File }) => {
    // Criando FormData para possível upload de arquivo
    const formData = new FormData();
    
    if (imageData.title) {
      formData.append('title', imageData.title);
    }
    if (imageData.description) {
      formData.append('description', imageData.description);
    }
    if (imageData.category) {
      formData.append('category', imageData.category.toString());
    }
    if (typeof imageData.featured === 'boolean') {
      formData.append('featured', imageData.featured.toString());
    }
    if (imageData.image) {
      formData.append('image', imageData.image);
    }

    try {
      const response = await api.put(`/gallery/images/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteImage: async (id: number) => {
    try {
      const response = await api.delete(`/gallery/images/${id}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Destacar/remover destaque de uma imagem
  toggleImageFeatured: async (id: number, featured: boolean) => {
    try {
      const response = await api.patch(`/gallery/images/${id}/`, { featured });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default galleryService; 