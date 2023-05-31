const  container = document.getElementById('demo')

function cardFilm(film){
    return `    
    <div class="film">
        <img class="film_banner" src= "${film.image}"/>
        <h2 class="title">${film.title}</h2>
        <p class="description"> ${film.description} </p></br>
        <p class="director"> Director: ${film.director} </p></br>
        <p class="producer"> Producer: ${film.producer} </p></br>
        <p class="year"> Year: ${film.release_date} </p>
    </div>
    `
}

async function getMovies(){
    try{
        const response = await fetch(`https://ghibliapi.vercel.app/Films`)
        const json = await response.json()
        return json
    }
    catch(erro){
        console.error("Erro identificado: " + erro)
    }
}

async function main(){
    const films = await getMovies()
    films.map( (film) => {container.innerHTML += cardFilm(film)} )
}

main()

getMovies()