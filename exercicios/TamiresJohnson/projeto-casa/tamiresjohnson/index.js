const container = document.getElementById("demo");

function createFilm(film) {
  return `
     
    <div class="films">
       <h2 class="title">${film.title}</h2>
       <img src = "${film.image}"/>
       <p class="description">${film.description}</p>
       <p class="diretor">Diretor: ${film.director}</p>
       <p class="date">Duração: ${film.running_time} minutos.</p>  
    </div>

  `;
}

async function getFilms() {
  try {
    const response = await fetch(`https://ghibliapi.vercel.app/films`);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (erro) {
    console.log("Erro capturado: " + erro);
  }
}

async function main() {
  const films = await getFilms();
  films.map((film) => container.innerHTML += createFilm(film));
}

main()