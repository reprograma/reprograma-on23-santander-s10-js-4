const main = document.getElementById('main')

function criarCard(card){
    return` 
    <div class = "card">
    <h2 class = "title">${card.title}</h2>
    <img class= "image" src= ${card.image}
    <p class = "description">${card.description}</p>
    <p class = "director" > ${card.director}</p>
    </div>
    `
}

async function listaFilmes(){
try{
    const retorno = await fetch('https://ghibliapi.vercel.app/films') //O que tem armazenado no retorno é uma promise
    const jsonLista = await retorno.json()
    const meusCards = jsonLista.slice(0, 5)
 
    return(meusCards)

  
}
catch(erro){
    console.error("erro capturado" + erro)
    
}
}


async function funcaoPrincipal(){
  const cards = await listaFilmes()
    cards.map((card) => main.innerHTML += criarCard(card))
  
  
}

funcaoPrincipal()

