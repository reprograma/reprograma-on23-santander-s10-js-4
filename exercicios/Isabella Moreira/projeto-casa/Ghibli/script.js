const container = document.getElementById("container")


async function fetchFilms() {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const data = await response.json();

    
    const selectedFilms = data.slice(0, 10);

   
    const cards = selectedFilms.map(film => {
      return `
        <div class="card">
          <img src="${film.image}" alt="${film.title}" />
          <h2>${film.title}</h2>
          <h2>${film.original_title}</h2>
          <p>${film.description}</p>
        </div>
      `;
    });


    container.innerHTML = cards.join('');
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

fetchFilms();