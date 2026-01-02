<p align="center">
  <img src="https://raw.githubusercontent.com/Gelzieny/github-blog/63832510faf123188f2b405666f29d63e383b9a5/public/Logo.svg" alt="Logo" width="200"/>
</p>


<p align="center">
  Um blog pessoal que utiliza as issues do GitHub como sistema de publicação de posts
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Styled Components" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/>
</p>

## 📋 Sobre o Projeto

O **GitHub Blog** é uma aplicação web que transforma as issues de um repositório do GitHub em um blog pessoal. Cada issue marcada com a label `published` se torna um post no blog, permitindo que você escreva seus artigos usando Markdown e aproveite toda a infraestrutura do GitHub para gerenciar seu conteúdo.

## ✨ Funcionalidades

- 📝 **Posts em Markdown**: Escreva posts usando a sintaxe Markdown do GitHub
- 🔍 **Busca de Posts**: Sistema de busca integrado para encontrar posts específicos
- 👤 **Perfil do GitHub**: Exibe informações do seu perfil diretamente da API do GitHub
- 💬 **Contador de Comentários**: Mostra o número de comentários em cada post
- 🎨 **Syntax Highlighting**: Destaque de sintaxe para blocos de código
- ⏱️ **Datas Relativas**: Exibe quando os posts foram publicados de forma humanizada
- 📱 **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool e dev server ultrarrápido
- **[Styled Components](https://styled-components.com/)** - CSS-in-JS para estilização
- **[React Router DOM](https://reactrouter.com/)** - Gerenciamento de rotas
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Renderização de Markdown
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Destaque de sintaxe para código
- **[Moment.js](https://momentjs.com/)** - Manipulação de datas
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[Font Awesome](https://fontawesome.com/)** - Biblioteca de ícones

## 📁 Estrutura do Projeto

```
github-blog/
├── public/
│   ├── fonts/           # Fontes customizadas
│   ├── Cover.png        # Imagem de capa
│   └── headerBg.png     # Background do header
├── src/
│   ├── @types/          # Definições de tipos TypeScript
│   ├── components/      # Componentes reutilizáveis
│   │   ├── ExternalLink/
│   │   ├── Header/
│   │   └── Spinner/
│   ├── layouts/         # Layouts da aplicação
│   │   └── DefaultLayout/
│   ├── lib/             # Configurações de bibliotecas
│   │   └── axios.ts
│   ├── pages/           # Páginas da aplicação
│   │   ├── Blog/
│   │   │   └── components/
│   │   │       ├── Post/
│   │   │       ├── Profile/
│   │   │       └── SearchInput/
│   │   └── Post/
│   │       └── components/
│   │           ├── PostContent/
│   │           └── PostHeader/
│   ├── styles/          # Estilos globais e tema
│   │   ├── global.ts
│   │   └── theme/
│   ├── utils/           # Funções utilitárias
│   │   └── formatter.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── Router.tsx
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json
└── vite.config.ts
```

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm, npm ou yarn
- Uma conta no GitHub

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/github-blog.git
   cd github-blog
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   VITE_GITHUB_USERNAME=seu-usuario-github
   VITE_GITHUB_REPONAME=nome-do-repositorio
   ```

4. **Crie issues no seu repositório**
   
   - Acesse o repositório no GitHub
   - Crie issues com a label `published`
   - Escreva o conteúdo dos posts em Markdown

5. **Execute o projeto**
   ```bash
   pnpm dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```

6. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Build para Produção

```bash
pnpm build
# ou
npm run build
# ou
yarn build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 📝 Como Publicar Posts

1. Vá até o repositório configurado no GitHub
2. Crie uma nova issue
3. Adicione a label `published` à issue
4. Escreva seu post usando Markdown
5. Publique a issue
6. O post aparecerá automaticamente no blog

## 🎨 Personalização

### Tema

O tema pode ser customizado editando o arquivo [`src/styles/theme/defaultTheme.ts`](src/styles/theme/defaultTheme.ts).

### Fontes

As fontes customizadas podem ser adicionadas na pasta `public/fonts/` e configuradas no arquivo [`src/styles/global.ts`](src/styles/global.ts).

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

Desenvolvido com 💜 por [Gelzieny](https://github.com/Gelzieny)

---

<p align="center">
  Feito com React + TypeScript + Vite
</p>