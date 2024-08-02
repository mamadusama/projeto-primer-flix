# Prime Flix

Prime Flix é uma aplicação web para visualizar e gerenciar filmes favoritos, utilizando a API do The Movie Database (TMDb).



## Funcionalidades

- Visualizar filmes em exibição.
- Visualizar detalhes de um filme específico.
- Adicionar filmes aos favoritos.
- Remover filmes dos favoritos.
- Exibir filmes populares em um banner.

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/mamadusama/prime-flix.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd prime-flix
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

2. Abra o navegador e acesse http://localhost:3000.

# A estrutura do projeto Prime Flix é organizada da seguinte forma:

├── src

│   ├── components

│   │   ├── Header/index.js

│   │   └── Banner/index.js.js

│   ├── pages

│   │   ├── Home/index.js.js

│   │   └── Favoritos/index.js

          └── Erro/index.js

          └── Filme/index.js
│   ├── services

│   │   └── api.js

│   ├── App.js

│   ├── index.js

│   └── styles.css

├── public

│   ├── index.html

│   └── logo.png

├── package.json

└── README.md

```

Explicação da estrutura:

- A pasta `src` contém todo o código-fonte da aplicação.
- A pasta `components` contém os componentes reutilizáveis da aplicação, como `MovieCard`, `MovieDetails`, `MovieList` e `Banner`.
- A pasta `pages` contém as páginas da aplicação, como `Home` e `Favorites`.
- A pasta `services` contém os serviços de comunicação com a API, como `api.js`.
- O arquivo `App.js` é o ponto de entrada da aplicação.
- O arquivo `index.js` é responsável por renderizar a aplicação no navegador.
- O arquivo `styles.css` contém os estilos CSS da aplicação.
- A pasta `public` contém arquivos estáticos, como o `index.html` e o `logo.png`.
- O arquivo `package.json` contém as dependências e scripts do projeto.
- O arquivo `README.md` é o arquivo de documentação do projeto.

Essa estrutura organizada facilita a manutenção e o desenvolvimento da aplicação Prime Flix.

## Tecnologias Utilizadas

A aplicação Prime Flix utiliza as seguintes tecnologias:

- React: uma biblioteca JavaScript para construção de interfaces de usuário.
- The Movie Database (TMDb) API: uma API que fornece informações sobre filmes, como detalhes, imagens e avaliações.
- Axios: uma biblioteca JavaScript para fazer requisições HTTP.
- React Toastify: uma biblioteca JavaScript para exibir notificações de forma elegante.

Essas tecnologias foram escolhidas por sua popularidade, facilidade de uso e suporte ativo pela comunidade de desenvolvedores. Elas permitem criar uma aplicação web moderna e responsiva, com uma ótima experiência de usuário.

React Toastify


Essas tecnologias foram escolhidas por sua popularidade, facilidade de uso e suporte ativo pela comunidade de desenvolvedores. Elas permitem criar uma aplicação web moderna e responsiva, com uma ótima experiência de usuário.

## Contribuição

Se você gostaria de contribuir para o projeto Prime Flix, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Clone o seu fork para o seu ambiente local:
    ```bash
    git clone https://github.com/mamadusama/prime-flix.git
    ```
3. Crie uma nova branch para a sua contribuição:
    ```bash
    git checkout -b minha-contribuicao
    ```
4. Faça as alterações desejadas no código.
5. Commit suas alterações:
    ```bash
    git commit -m "Minha contribuição"
    ```
6. Envie as alterações para o seu fork:
    ```bash
    git push origin minha-contribuicao
    ```
7. Abra um pull request no repositório original.

Agradeço antecipadamente por sua contribuição para o projeto Prime Flix! Sua ajuda é muito bem-vinda.

