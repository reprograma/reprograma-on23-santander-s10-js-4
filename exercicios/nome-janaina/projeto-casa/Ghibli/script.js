

function creatSection(film) {
    return `
    <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
        </div>
    `
}

const container = document.getElementById('demo')

async function getfilms(numero) {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const films = await response.json()
        const ourFilms = films.slice(numero, numero+5)
        return ourFilms
    }
    catch(err) {
        console.error("capturei um erro: ", err)
    }
}

async function main() {
    const numeroRondomico = parseInt(Math.random() * 19)
    const films = await getFilms(numeroRondomico)
    films.forEach((film) => container.innerHTML += creatSection(film))
}

main()

