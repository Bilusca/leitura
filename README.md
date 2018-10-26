# Readable/Leitura app

O projeto de conclusão do módulo 2, sobre React e Redux, consiste em um simples feed, para a leitura, criação, edição, e deleção de posts. Fazendo o uso da API desenvolvida pela própria [Udacity](https://github.com/udacity/reactnd-project-readable-starter).

## Iniciando o projeto

Primeiro você terá que clonar esse repositório:

    $ git clone https://github.com/Bilusca/leitura.git

Depois instale as dependências do projeto com o comando:

    $ npm install
E para rodar o projeto, use o comando:

    $ npm start

## Dependências do projeto

As dependências do projeto são:

 - form-serialize
 - moment
 - lodash
 - react-modal
 - redux-thunk
 - react-icons
 - react-router-dom
 
 Além das usadas normalmente para se desenvolver um App React/Redux.

 ## O projeto

O Projeto conta com um menu no topo da aplicação, onde você pode navegar pelas categorias. Em cada página, existe um botão onde se pode criar os posts, e um filtro simples para ordenar os mesmos. Ao clicar no título do post, você ira para a pagina de detalhes, onde é mostrado os comentários feito no post, nessa página também apresenta um filtro e um botão onde pode criar comentário no post. Tanto no Post quanto no Comentário, você pode editar e excluir os respectivos.