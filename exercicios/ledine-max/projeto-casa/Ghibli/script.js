const conteudo = document.getElementById('studio_Ghibli')

function createFilm(film) {
    return `
    <div class="films">
    <h2 class="title">${film.title}</h2>
    <h3 class="original_title">${film.original_title}</h3>
    <img class="image" src="${film.movie_banner}">
    <p class="director">Direção: ${film.director}</p>
    <p class="date">Ano de lançamento: ${film.release_date}</p>
    <p class="description">${film.description}</p>
    </div>
    `
}


async function getFilms() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films')
        const json = await response.json()
        return json
    }
    catch (erro) {
        console.error("Erro capturado: " + erro)
    }
}

async function main() {
    const films = await getFilms()
    films.map((films) => conteudo.innerHTML += createFilm(films))
}

main()