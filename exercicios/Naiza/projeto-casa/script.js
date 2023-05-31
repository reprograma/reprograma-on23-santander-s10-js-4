async function requisicaoFilmes() {
    try {
        const resposta = await fetch('https://ghibliapi.vercel.app/films')
        const dados = await resposta.json()
        preencherPagina(dados)
    } catch (erro) {
        console.error(erro)
    }
}

requisicaoFilmes()



const container = document.getElementById('demo')


function preencherPagina(filmes) {
    filmes.map((filme) => {
        const card = document.createElement("section")
        card.classList.add('cards');
        container.appendChild(card);

        const cover = document.createElement("img")
        cover.classList.add("covers")
        cover.setAttribute('src', filme.image)
        card.appendChild(cover)

        const title = document.createElement("h2")
        title.classList.add('title')
        title.innerText = filme.title
        card.appendChild(title)

        const year = document.createElement("p")
        year.classList.add('contents')
        year.innerHTML = `Ano: <span class="dynamic-text">${filme.release_date}</span>`
        card.appendChild(year)

        const director = document.createElement("p")
        director.classList.add('contents')
        director.innerHTML = `Direção: <span class="dynamic-text">${filme.director}</span>`
        card.appendChild(director)

        const description = document.createElement("p")
        description.classList.add("contents")
        description.classList.add("description")
        description.innerHTML = `Gêneros: <span class="dynamic-text">${filme.description}</span>`
        card.appendChild(description)

    })

}

