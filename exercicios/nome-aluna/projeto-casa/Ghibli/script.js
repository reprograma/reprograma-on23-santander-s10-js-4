const container = document.getElementById('demo')

function createFilms(card) {
  return `
    <div class="card">
      <img class="image" src=${card.image}>
      <h2 class="title">${card.title}</h2>
      <p class="original_title">${card.original_title}</p>
      <p class="type">${card.director}</p>
      <p class="release_date">${card.release_date}</p>
      <p class="description">${card.description}</p>
    </div>
  `
} 

async function getCards() {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films")
    const json = await response.json()
    //const cards = json.data
    const oursCards = cards.slice(0,21)
    return oursCards
  }
  catch(erro) {
    console.error("Erro capturado: " + erro)
  }
}

async function main() {
  const cards = await getFilms()
  cards.map((card) => container.innerHTML += createFilms(card))
}

main()
