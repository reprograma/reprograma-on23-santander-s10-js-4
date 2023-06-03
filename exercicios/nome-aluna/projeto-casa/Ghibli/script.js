// TODO: função assincrona principal que vai gerenciar toda a execução {OK}
// TODO: função assincrona para realizar a requisição {OK}
// TODO: função que retorna o HTML {OK}
// TODO: criar backup para caso de erro na requisição {OK}
// TODO: gerar numero randomico para o slice {OK}

function createSection(film) {
  return `
    <div class="film">
      <img src=${film.image} class="image">
      <h2 class="title">${film.title}</h2>
    </div>
  `
}

const container = document.getElementById('demo')

const backup = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "original_title": "天空の城ラピュタ",
  "original_title_romanised": "Tenkū no shiro Rapyuta",
  "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
  "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "release_date": "1986",
  "running_time": "124",
  "rt_score": "95",
  "people": [
      "https://ghibliapi.vercel.app/people/598f7048-74ff-41e0-92ef-87dc1ad980a9",
      "https://ghibliapi.vercel.app/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "https://ghibliapi.vercel.app/people/3bc0b41e-3569-4d20-ae73-2da329bf0786",
      "https://ghibliapi.vercel.app/people/40c005ce-3725-4f15-8409-3e1b1b14b583",
      "https://ghibliapi.vercel.app/people/5c83c12a-62d5-4e92-8672-33ac76ae1fa0",
      "https://ghibliapi.vercel.app/people/e08880d0-6938-44f3-b179-81947e7873fc",
      "https://ghibliapi.vercel.app/people/2a1dad70-802a-459d-8cc2-4ebd8821248b"
  ],
  "species": [
      "https://ghibliapi.vercel.app/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
  ],
  "locations": [
      "https://ghibliapi.vercel.app/locations/"
  ],
  "vehicles": [
      "https://ghibliapi.vercel.app/vehicles/4e09b023-f650-4747-9ab9-eacf14540cfb"
  ],
  "url": "https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
}]

async function getFilms(numero) {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    const films = await response.json()
    const ourFilms = films.slice(numero, numero+5)
    return ourFilms
  }
  catch(err) {
    console.error("Capturei um erro: ", err)
    return backup
  }
}

async function main() {
    const numeroRandomico = parseInt(Math.random() * 19)
    // console.log(parseInt(Math.random() * 19))
    const films = await getFilms(numeroRandomico)
    films.forEach((film) => container.innerHTML += createSection(film))
}

main()
