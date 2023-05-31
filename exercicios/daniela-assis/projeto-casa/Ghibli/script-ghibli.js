const container = document.getElementById('demo')

function createFilm(film) {
    return `
<div class= "films">

<img src="${film.image}"/>
<h2 class= "title"> ${film.title}</h2>
<p class= "director">Director: ${film.director}</p>
<p class= "producer"> Producer: ${film.producer}</p>
<p class= "description"> ${film.description}</p>
<p class= "genero"> ${film.genero}</p>
</div>
`
}

async function getFilmes() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films')
        const json = await response.json()
        const cards = json.data
        const ourCards = cards.slice(2, 10)
        return ourCards
    }

    catch(erro) {
        console.error("Erro capturado:" + erro)
    }
}

async function main() {
    const cards = await getFilmes()
    cards.map((card) => container.innerHTML += createFilms(card))
    console.log(cards)

}

//main()
getFilmes()

