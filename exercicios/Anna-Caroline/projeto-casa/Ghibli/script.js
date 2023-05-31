
const container = document.getElementById('demo')


function createCard(film) {
    return `
      <div class="card">
        <img class="image" src=${film.image}>
        <h2 class="title">${film.title}</h2>
        <p class="director">${film.director}</p>
        <p class="year">${film.release_date}</p>
        <p class="description">${film.description}</p>
      </div>
    `
  } 

async function getfilm(){
    try { 
        const response = await fetch("https://ghibliapi.vercel.app/films")
        const films = await response.json()
        return films
        
    } catch (erro) {
        console.error('capturei o erro'+ erro)
    }
}
async function main() {
    const films = await getfilm()
    console.log(films)
    films.map((film) => container.innerHTML += createCard(film))
}

main()