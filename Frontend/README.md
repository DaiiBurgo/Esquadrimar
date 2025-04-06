# Frontend do Portal Esquadrimar

Frontend desenvolvido com React e TypeScript para o Portal Esquadrimar.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Material-UI 5
- React Router 6
- Axios
- Formik & Yup

## Estrutura do Projeto

```
src/
├── components/              # Componentes reutilizáveis
│   ├── layout/              # Componentes de layout
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Footer.tsx       # Rodapé com informações e links
│   │   └── Layout.tsx       # Estrutura principal da página
│   ├── contact/
│   │   └── ContactForm.tsx  # Formulário de contato
│   └── gallery/
│       └── GalleryGrid.tsx  # Grade de exibição de imagens
├── pages/                   # Páginas principais
│   ├── Home.tsx             # Página inicial
│   └── Contact.tsx          # Página de contato
├── services/                # Serviços para API
│   ├── api.ts               # Configuração do Axios
│   ├── contact.ts           # Serviço para contatos
│   └── gallery.ts           # Serviço para galeria
├── App.tsx                  # Componente principal com rotas
├── index.tsx                # Ponto de entrada
└── reportWebVitals.ts       # Métricas de performance
```

## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado (v14+ recomendado)

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
```

4. Acesse o frontend em: http://localhost:3000

## Páginas Implementadas

1. **Home** - Página inicial com:
   - Banner principal
   - Seção "Sobre nós"
   - Exibição de serviços
   - Destaques do portfólio
   - Call to action

2. **Contato** - Página com:
   - Formulário de contato
   - Informações de contato da empresa
   - Espaço para mapa

## Páginas a Implementar

Para completar o projeto, você deve implementar:

1. **Sobre Nós** (`src/pages/About.tsx`)
   - História da empresa
   - Missão, visão e valores
   - Equipe

2. **Serviços** (`src/pages/Services.tsx`)
   - Descrição detalhada dos serviços
   - Subpáginas para cada serviço:
     - Marcenaria
     - Serralheria
     - Marmoraria

3. **Portfólio** (`src/pages/Portfolio.tsx`)
   - Galeria de fotos organizadas por categorias
   - Filtros de seleção

4. **Login/Registro** (`src/pages/Login.tsx` e `src/pages/Register.tsx`)
   - Formulários de autenticação
   - Integração com a API de usuários

## Integração com o Backend

O frontend já está configurado para se comunicar com o backend através dos serviços em `src/services/`.

1. A URL base da API está configurada para `http://localhost:8000/api`
2. As chamadas de API incluem credenciais (cookies)
3. Os serviços implementam tratamento básico de erros

## Personalização do Tema

O tema do Material-UI está configurado em `src/App.tsx` e pode ser personalizado conforme necessário, incluindo:

- Paleta de cores primária e secundária
- Tipografia
- Componentes customizados

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeta a configuração do Create React App

## Próximos Passos

1. Implementar as páginas restantes
2. Melhorar a responsividade
3. Implementar testes
4. Adicionar animações e melhorias de UX
5. Configurar PWA (Progressive Web App) 