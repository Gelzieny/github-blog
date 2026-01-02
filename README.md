<p align="center">
  <img src="https://raw.githubusercontent.com/Gelzieny/github-blog/63832510faf123188f2b405666f29d63e383b9a5/public/Logo.svg" alt="Logo" width="200"/>
</p>


<p align="center">
  Aplicação web de blog pessoal construída em React, onde as issues do GitHub funcionam como posts, explorando consumo de API, rotas dinâmicas, tipagem com TypeScript e boas práticas de desenvolvimento front-end.
</p>


## 📄 Instruções do Desafio

Confira os detalhes completos do desafio [clicando aqui](https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1#d1f3e8b0ffe04776952f4d2dad9d4d56).


## 🎨 Layout

O layout da aplicação está disponível no [Figma](https://www.figma.com/design/WbfKJ0REa1NH7sN54PI7ri/GitHub-Blog--Community---Copy-?node-id=2-12&p=f&t=neLJfdBRw02kLIVd-0)



## 📋 Sobre o Projeto

O **GitHub Blog** é uma aplicação web que transforma as issues de um repositório do GitHub em um blog pessoal. Cada issue marcada com a label `published` se torna um post no blog, permitindo que você escreva seus artigos usando Markdown e aproveite toda a infraestrutura do GitHub para gerenciar seu conteúdo.

## 📸 Preview do Projeto

<p align="center">
  <img src="https://github.com/Gelzieny/github-blog/blob/main/.github/img/posts.png?raw=true" alt="Home do projeto" width="400"/>
  <img src="https://github.com/Gelzieny/github-blog/blob/main/.github/img/detalhes_posts.png?raw=true" alt="Detalhes do Post" width="400"/>
</p>


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


## 🚀 Como executar o projeto

### Pré-requisitos

<p align="justify">Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,nodejs,vite,vscode" />
</a>



### 1. Clone o repositório

```bash
# Clone este repositório
$ git clone https://github.com/Gelzieny/github-blog.git


# Acesse a pasta do projeto no terminal/cmd
$ cd github-blog

# Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis
VITE_GITHUB_USERNAME=seu-usuario-github
VITE_GITHUB_REPONAME=nome-do-repositorio

# Instale as dependências  pnpm | npm | yarn
$ npm install

# Execute a aplicação em modo de desenvolvimento pnpm | npm | yarn
$ npm run dev

```
### **Crie issues no seu repositório**
   
   - Acesse o repositório no GitHub
   - Crie issues com a label `published`
   - Escreva o conteúdo dos posts em Markdown


## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

# 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://gelzieny-dev.vercel.app/)

---

<p align="center">
⭐ Se este projeto foi útil, considere dar uma estrela!
</p>