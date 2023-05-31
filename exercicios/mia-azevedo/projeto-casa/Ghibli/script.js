const container = document.getElementById('container__cards')


async function getFilms() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films')
        const films = await response.json()
        let filmsHtml = films.map(film => convertFilmsToHtml(film))
        filmsHtml.forEach((film) => container.innerHTML += film)
        
    } catch (error) {
        console.error('error: ' + error)
    }
}

function convertFilmsToHtml(film){
    return `
    <div class="card">
          <div class="card__banner">
            <img
              src="${film.movie_banner}"
              alt="movie banner from ${film.title}"
            />
          </div>
  
          <div class="card__title">
            <h2>${film.title}</h2>
          </div>
  
          <div class="card__stats">
            <ul>
              <li>Original Title: ${film.original_title} - ${film.original_title_romanised}</li>
              <li>Director: ${film.director}</li>
              <li>Realease date: ${film.release_date}</li>
            </ul>
          </div>
  
          <div class="card__description">
            <p>${film.description}</p>
          </div>
        </div>

    `
}

getFilms()