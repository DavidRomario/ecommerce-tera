function listagemDeProdutos() {
    fetch('./dados/produtos.json')
        .then(resposta => resposta.json())
        .then(dadosJson => {
            console.log(dadosJson)
            dadosJson.map(item => {
                
                const section = document.querySelector("section");
                section.innerHTML += montaHTMLhome(item.nome, item.valor, item.imagem, item.id)

                


            })
        })
    }

listagemDeProdutos()

function montaHTMLhome(nome, preco, imagem, id){
    return ` <div class="tenis-content">
        <a href="./produto.html">
          <img class="image" src="${imagem}" alt="" href="produto.html" />
        </a>
        <a href="produto.html" id="product" class="name">${nome}</a>
        <p class="genero">Masculino</p>
        <p class="frete">Frete Gratis</p>
        <p>${preco}</p>
        <p class="parcelas">ou 3x de R$ 199,96</p>
      </div>`
}



//         dadosJson.map(item => {
//             container.innerHTML += `div class = "tenis-content" >
//     <a href = "./produto.html" ><
//     img class = "image"
// src = "style/38_2.webp/${item.imagem}"
// alt = ""href = "produto.html"/>
// </a>
// <a href = "produto.html"
// class = "name"> Tenis Nike Pegasus 38 </a>
// <p class = "genero"> Masculino </p>
//     <p class = "frete"> Frete Gratis </p>
//     <p> R$ 599, 99 </p>
//     <p class = "parcelas" > ou 3 x de R$ 199, 96 < /p>
//     </div>`;

// {
/* < div class = "tenis-content" >
    <
    a href = "./produto.html" >
    <
    img class = "image"
src = "style/38_2.webp"
alt = ""
href = "produto.html" / >
    <
    /a> <
    a href = "produto.html"
class = "name" > Tenis Nike Pegasus 38 < /a> <
    p class = "genero" > Masculino < /p> <
    p class = "frete" > Frete Gratis < /p> <
    p > R$ 599, 99 < /p> <
    p class = "parcelas" > ou 3 x de R$ 199, 96 < /p> <
    /div> */
// }