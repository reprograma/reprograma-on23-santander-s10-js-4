//Utilize o fetch() para realizar uma requisição ao endpoint https://ghibliapi.vercel.app/films da Studios Ghibli API e popule a página que também será criada por vocês (HTML e CSS) com os dados do json que é a lista com todos os filmes da Ghibli (22);

//https://ghibliapi.vercel.app/films 
//https://ghibliapi.vercel.app

const container = document.getElementById('demo')

async function getFilm(){
    try{
        const response = await fetch("https://ghibliapi.vercel.app/films")
        const filmes = await response.json()

        filmes.forEach(filme => {
            container.innerHTML += `
            <section class="cards"> 
                <h2 class="titles"> ${filme.title}</h2>
                <img src=${filme.movie_banner} alt=${filme.title} />
                <p class="contents">Título original: <span class="dynamic-text">${filme.original_title}<span></p>
                <p class="contents">Diretor: <span class="dynamic-text">${filme.director}<span></p>
                <p class="contents">Produtor: <span class="dynamic-text">${filme.producer}<span></p>
                <p class="contents">Data de lançamento: <span class="dynamic-text">${filme.release_date}<span></p>
                <p class="contents">Tempo de duração: <span class="dynamic-text">${filme.running_time} minutos<span></p>
                
            </section>
            `
        })
        
    }
    catch(erro){
        console.error("capturei um erro: " + erro)
    }
}

getFilm()
