//checklist da atividade - semana 10 

// criar função assinc. principal [done]

const container = document.getElementById('demo')

  async function getFilms(numero) {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      const films = await response.json()
      const ourFilms = films.slice(3, 8)
      return ourFilms
    }
    catch(err) {
      console.error("Capturei um erro:", err)
      return backup
    }
  }

  // criar requisição [done]

function createSection(film) {
    return `
      <div class="film">
        <img src=${film.image} class="image">
        <h2 class="title">${film.title}</h2>
        <p>Director: ${film.director}</p>
        <p1>Description: ${film.description}</p>
        <p2>Producer: ${film.producer}</p>
        <p3>Year: ${film.release_date}</p>
      </div>
    `
  }

  // criar return do html [done]

  async function main() {
      const films = await getFilms()
      films.forEach((film) => container.innerHTML += createSection(film))
  }
  
  // feito após a aula de encerramento da semana - backup (erro de requisição) [done]

  const backup = [{
    "id": "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    "title": "Kiki's Delivery Service",
    "original_title": "魔女の宅急便",
    "original_title_romanised": "Majo no takkyūbin",
    "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7nO5DUMnGUuXrA4r2h6ESOKQRrx.jpg",
    "movie_banner": "https://image.tmdb.org/t/p/original/h5pAEVma835u8xoE60kmLVopLct.jpg",
    "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
    "release_date": "1989",
    "running_time": "102",
    "rt_score": "96",
    "people": [
        "https://ghibliapi.vercel.app/people/2409052a-9029-4e8d-bfaf-70fd82c8e48d",
        "https://ghibliapi.vercel.app/people/7151abc6-1a9e-4e6a-9711-ddb50ea572ec",
        "https://ghibliapi.vercel.app/people/1c1a8054-3a34-4185-bfcf-e8011506f09a",
        "https://ghibliapi.vercel.app/people/bc838920-7849-43ea-bfb8-7d5e98dc20b6",
        "https://ghibliapi.vercel.app/people/33f5fea9-c21b-490b-90e0-c4051c372826",
        "https://ghibliapi.vercel.app/people/d1de1c0e-3fcd-4cef-94eb-bb95cc2314aa"
    ],
    "species": [
        "https://ghibliapi.vercel.app/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
        "https://ghibliapi.vercel.app/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3"
    ],
    "locations": [
        "https://ghibliapi.vercel.app/locations/"
    ],
    "vehicles": [
        "https://ghibliapi.vercel.app/vehicles/"
    ],
    "url": "https://ghibliapi.vercel.app/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e"
  }]
  
 
  main()