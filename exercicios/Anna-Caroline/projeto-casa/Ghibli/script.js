
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

async function getfilm(random){
    try { 
        const response = await fetch("https://ghibliapi.vercel.app/films")
        const films = await response.json()
        const oursfilms = films.slice(random, random +4)
        return oursfilms
        
    } catch (erro) {
        console.error('capturei o erro'+ erro)
    }
}
async function main() {
    const random = parseInt(Math.random()*20)
    console.log(random)
    const films = await getfilm(random)
    console.log(films)
    films.map((film) => container.innerHTML += createCard(film))
}

main()

const superTitle = document.createElement('h1')
superTitle.innerHTML = `Random Ghibli Film`
document.body.appendChild(superTitle);
