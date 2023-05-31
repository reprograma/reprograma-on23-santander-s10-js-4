const container = document.getElementById('demo')

function createFilm(film) {
  return `
    <div class="films">
       <img src = "${film.image}" class="imagem">
      <h2 class="title">${film.title}</h2>
      <p class="diretor">${film.director}</p>
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
  catch(erro) {
    console.error("Erro capturado: " + erro)
  }
}

async function main() {
  const films = await getFilms()
  films.map((film) => container.innerHTML += createFilm(film))
  
}

main()

    
  