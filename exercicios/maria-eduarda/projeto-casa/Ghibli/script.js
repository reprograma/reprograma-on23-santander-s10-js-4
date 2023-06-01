const superTitle = document.createElement('h1')
superTitle.innerHTML = `Ghibli Films`
document.body.appendChild(superTitle)
const container = document.getElementById('demo')



function createCard(film) {
    return `
      <div class="films">
        <img class="image" src=${film.image}>
        <h2 class="title">${film.title}</h2>
        <p class="director">${film.director}</p>
        <p class="date">${film.release_date}</p>
        <p class="description">${film.description}</p>
      </div>
    `
  }  
async function getCards() {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films')
      const json = await response.json()
      return json
    //   const cards = json.data
    //   const oursCards = cards.slice(754, 759)
    //   return oursCards
    }
    catch(erro) {
      console.error("Erro capturado: " + erro)
    }
  }

  async function main() {
    const films = await getCards()
    films.map((film) => container.innerHTML += createCard(film))
  }

  main()