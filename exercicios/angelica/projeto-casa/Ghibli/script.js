const container = document.getElementById('index')




function createFilms(film) {
  return `
    <div class="films">
      <img src=${film.image}>
      <h2 class="title">${film.title}</h2>
      <p class="original_title_romanised">${film.original_title_romanised}</p>
      <p class="type">${film.director}</p>
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
  films.map((films) => container.innerHTML += createFilms(films))
}




main()
