# Backend do Portal Esquadrimar

Backend desenvolvido com Django e Django Rest Framework para o Portal Esquadrimar.

## Tecnologias Utilizadas

- Python 3.13
- Django 5.2
- Django REST Framework
- PostgreSQL
- Pillow (para manipulação de imagens)

## Configuração do Ambiente

1. Certifique-se de ter o Python 3.8+ instalado
2. Crie um ambiente virtual:
```bash
python -m venv venv
```

3. Ative o ambiente virtual:
- Windows:
```bash
venv\Scripts\activate
```
- Linux/Mac:
```bash
source venv/bin/activate
```

4. Instale as dependências:
```bash
pip install -r requirements.txt
```

5. Configure o PostgreSQL:
- Instale o PostgreSQL (se ainda não tiver instalado)
- Crie um banco de dados chamado `esquadrimar_db`
- Configure as credenciais no arquivo `.env`

6. Execute as migrações:
```bash
python manage.py migrate
```

7. Crie um superusuário:
```bash
python manage.py createsuperuser
```

8. Inicie o servidor:
```bash
python manage.py runserver
```

## Estrutura do Projeto

- `esquadrimar/`: Configurações do projeto Django
- `users/`: App para gerenciamento de usuários
- `contact/`: App para formulário de contato
- `gallery/`: App para gestão de galeria de imagens
- `api/`: App para endpoints da API REST

## API Endpoints

### Usuários
- `POST /api/users/register/`: Registro de usuário
- `POST /api/users/login/`: Login de usuário
- `POST /api/users/logout/`: Logout de usuário
- `GET /api/users/profile/`: Perfil do usuário autenticado
- `PUT /api/users/profile/update/`: Atualização do perfil

### Contato
- `GET /api/contact/`: Lista de mensagens de contato (admin)
- `POST /api/contact/create/`: Envio de mensagem de contato
- `GET /api/contact/<id>/`: Detalhes de uma mensagem (admin)
- `PUT /api/contact/<id>/`: Atualização de mensagem (admin)
- `DELETE /api/contact/<id>/`: Exclusão de mensagem (admin)

### Galeria
- `GET /api/gallery/categories/`: Lista de categorias
- `POST /api/gallery/categories/`: Criação de categoria (admin)
- `GET /api/gallery/categories/<id>/`: Detalhes de categoria
- `PUT /api/gallery/categories/<id>/`: Atualização de categoria (admin)
- `DELETE /api/gallery/categories/<id>/`: Exclusão de categoria (admin)
- `GET /api/gallery/images/`: Lista de imagens
- `POST /api/gallery/images/`: Upload de imagem (admin)
- `GET /api/gallery/images/<id>/`: Detalhes de imagem
- `PUT /api/gallery/images/<id>/`: Atualização de imagem (admin)
- `DELETE /api/gallery/images/<id>/`: Exclusão de imagem (admin)

## Acesso

- Admin: http://localhost:8000/admin
- API: http://localhost:8000/api
- API Auth: http://localhost:8000/api-auth 