const container = document.getElementById('demo')

const superTitle = document.createElement('h1')
superTitle.innerHTML = `Ghibli Films`
document.body.appendChild(superTitle)

function createFilm(film) {
    return `
    <div class="card">
      <img class="image" src=${film.image}>
      <h2 class="title">${film.title}</h2>
      <p class="date"><strong>Ano:</strong> ${film.release_date}</p>
      <p class="director"><strong>Diretor:</strong> ${film.director}</p>
      <p class="description"><strong>Descrição:</strong> ${film.description}</p>
    </div>
  `
}

async function getFilms() {
    try {
        const resposta = await fetch('https://ghibliapi.vercel.app/films')
        const json = await resposta.json()
        return json


    }
    catch (erro) {
        console.error("Erro: " + erro)
    }
}

async function main() {
    const films = await getFilms()
    films.map((film) => container.innerHTML += createFilm(film))
}

main()