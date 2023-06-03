const container = document.getElementById("demo")

function createFilms(card){
    return `
    <div class="card">
    <h2 class="title">${card.original_title}</h2>
    <img class="image" src=${card.image}>
    <p class="type">${card.director}</p>
    <p class="release_date">${card.release_date}</p>
    <p class="description">${card.description}</p>
    </div>
    `
}

async function getFilms () {
    try {
        const response = await fetch("https://ghibliapi.vercel.app/films")
        const json = await response.json()
        // const cards = json.data
        const ourCards = json.slice(10,15)
        return ourCards


    }
    catch(erro) {
        console.error("Erro capturado:" + erro)

    }
}

async function main(){
    const cards = await getFilms()
    cards.map((card)=> container.innerHTML += createFilms(card))

}

main()
