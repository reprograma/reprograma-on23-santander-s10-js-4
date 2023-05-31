const container = document.getElementById('demo')

function createFilms(film) {
  return `
    <div class="films">
      <img class="image" src=${film.image}>
      <h2 class="title">${film.name}</h2>
      <p class="type">${film.type}</p>
      <p class="description">${film.desc}</p>
    </div>
  `
} 

async function getFilms() {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films')
    const json = await response.json()
    return films
  }
  catch(erro) {
    console.error("Erro capturado: " + erro)
  }
}

async function main() {
  const cards = await getCards()
  cards.map((card) => container.innerHTML += createCard(card))
}

//main()
()getFilms
