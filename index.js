function principal() {
    function listagemDeProdutos(home) {
        fetch('./dados/produtos.json')
            .then(resposta => resposta.json())
            .then(dadosJson => {
                console.log(dadosJson)
                dadosJson.map(item => {
                    const section = document.querySelector("section");
                    if (section !== null) {
                        section.innerHTML += montaHTMLhome(item.nome, item.valor, item.imagem, item.id, item.genero);
                    }
                });
            });
    }

    listagemDeProdutos(home)

    function montaHTMLhome(nome, preco, imagem, id, genero) {
        return ` <div class="tenis-content" id="${id}">
        <a href="./produto.html?produto=${id}">
          <img class="image" src="${imagem}" alt="" href="?produto=${id}" />
        </a>
        <a href="./produto.html?produto=${id}" id="product" class="name">${nome}</a>
        <p class="genero">${genero}</p>
        <p class="frete">Frete Gratis</p>
        <p>${preco}</p>
        <p class="parcelas">ou 3x de R$ 199,96</p>
      </div>`
    }

    function pegarProduto() {
         const queryString = window.location.search;
         // método split que utiliza o separador = para retornar o que tem depois dele
         const queryArray =  queryString.split("=");
         const idProduto = queryArray[1];
        fetch('./dados/produtos.json')
            .then((resposta) => resposta.json())
            .then((dados) => {
                dados.map((produto) => {
                     const main = document.querySelector("main");
                     if (main !== null) {
                        if (idProduto != 'undefined' && parseInt(idProduto) == produto.id) {
                           main.innerHTML = montaHTMLproduto(produto.nome, produto.valor, produto.imagem, produto.descricao, produto.id);
                        }
                     } 
                });
            });
    }

    pegarProduto()

    function montaHTMLproduto(nome, preco, imagem, descricao, id) {
        return ` <div class="product">
      <img class="img" src="${imagem}" alt="imagem tenis da nike" />
      <p class="name">${nome}</p>
      <p class="preço">${preco}</p>
      <p class="descricao">${descricao}</p>
      <div>
        <a href="carrinho.html">
          <button class="press">Adicionar ao carrinho</button>
        </a>
      </div>
    </div> `
    }
}

principal();