const container = document.getElementById('div-filmes');

function CriarFilmes(filmes) {
    return `
     <section class="cardsFilmes">
      <img class="imagensFilmes" src=${filmes.image}>
      <h2 class="titles">${filmes.title}</h2>
      <p class="contents">Titulo Original: <span class="text">${filmes.original_title}</span></p>
      <p class="contents">Ano: <span class="text">${filmes.release_date}</span></p>
      <p class="contents">Direção: <span class="text">${filmes.director}</span></p>
      <p class="contents">Descrição: <span class="text">${filmes.description}</span></p>
     </section>
    `

}

async function getFilmes() {
    try {
        const responde = await fetch('https://ghibliapi.vercel.app/films');
        const filmesFavoritos = await responde.json()
        const meusFilmesFavoritos = filmesFavoritos.slice(6,14);
        return meusFilmesFavoritos
    }
    catch (erro) {
        console.error("Ops, algo deu errado: ", + erro);
    }
}

async function renderizarFilmes() {
    const filmesFavoritos = await getFilmes()
    filmesFavoritos.map((filmes) => container.innerHTML += CriarFilmes(filmes))
}

renderizarFilmes()

