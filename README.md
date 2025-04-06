# Portal Esquadrimar

Projeto integrador da Univesp - Eixo Tecnologia da Informação e Computação - Portal da empresa Esquadrimar

## Visão Geral

Este projeto é um portal completo para a empresa Esquadrimar, com backend em Django/Python e frontend em React/TypeScript. O banco de dados utilizado é o PostgreSQL.

## Funcionalidades Principais

1. **Cadastro de Usuários**
   - Registro de usuários
   - Login/Logout
   - Perfis de usuário

2. **Formulário de Contato**
   - Envio de mensagens para a empresa
   - Gestão das mensagens recebidas (admin)

3. **Galeria de Fotos**
   - Upload de imagens
   - Categorização de imagens
   - Exibição em galeria
   - Gerenciamento de imagens (admin)

4. **Páginas Institucionais**
   - Home
   - Sobre Nós
   - Serviços (Marcenaria, Serralheria, Marmoraria)
   - Portfólio

## Tecnologias Utilizadas

### Backend
- Python 3.13+
- Django 5.2
- Django REST Framework
- PostgreSQL
- Pillow (para manipulação de imagens)

### Frontend
- React
- TypeScript
- Material-UI
- React Router
- Axios

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **Backend/**: Contém o código do backend Django
- **Frontend/**: Contém o código do frontend React

Cada parte possui seu próprio README.md com instruções específicas.

## Requisitos de Sistema

- Python 3.8+
- Node.js 14+
- PostgreSQL 12+
- PgAdmin 4+

## Configuração do Ambiente

### Backend

Veja as instruções detalhadas no [README.md do Backend](Backend/README.md).

### Frontend

Veja as instruções detalhadas no [README.md do Frontend](Frontend/README.md).

## Execução do Projeto

### Backend

```bash
cd Backend
python -m venv venv
venv\Scripts\activate  # No Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd Frontend
npm install
npm start
```

## Acessos

- Backend: http://localhost:8000
  - Admin: http://localhost:8000/admin
  - API: http://localhost:8000/api

- Frontend: http://localhost:3000

## Desenvolvimento

Este projeto foi desenvolvido como parte de um projeto integrador de faculdade para a empresa Esquadrimar, incorporando princípios de desenvolvimento web moderno e boas práticas de programação.

## Autores

- [Daii Burgo]

## Membros do grupo
- [adcionar membros]

## Licença

Este projeto está licenciado sob a licença MIT. 