const container = document.getElementById('container-section');

function createCardFilm(film) {
  return `
  <div class="card-film">
    <img src="${film.image}">
    <h2 class="title">${film.title}</h2>
    <h2 class="title">${film.original_title}</h2>
    <p>Director: ${film.director}</p>
    <p>Description: ${film.description}</p>
  </div>
  `
}

async function getFilms() {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const dados = await response.json();
    return dados;
  } catch (error) {
    console.error(error);
  }
}

async function populateCards() {
  const cardsFilms = await getFilms();
  cardsFilms.forEach(film => container.innerHTML += createCardFilm(film));
}

populateCards();