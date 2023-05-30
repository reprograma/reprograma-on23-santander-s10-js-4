const container = document.getElementById('demo');
const header = document.createElement('header');
header.setAttribute('class', 'header');

const logo = document.createElement('img');
logo.src = 'https://i.pinimg.com/originals/03/51/71/0351711fe834c3a96656f65b4c54b2b2.jpg';
logo.setAttribute('class', 'logo'); 

header.appendChild(logo); 
container.appendChild(header);

async function StudioGhibli() {
    try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        const data = await response.json();

        data.forEach((film) => {
            container.innerHTML += `
            <section class="cards">
                <h1 class="titles">${film.title}</h1>
                <img class="covers" src=${film.image}>
                <p class="contents">Sinopse: <span class="dynamic-text">${film.description}</span></p>
                <p class="contents">Direção: <span class="dynamic-text">${film.director}</span></p>
                <p class="contents">Produção: <span class="dynamic-text">${film.producer}</span></p>
                <p class="contents">Data de Lançamento: <span class="dynamic-text">${film.release_date}</span></p>
            </section>
            `;
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

StudioGhibli();