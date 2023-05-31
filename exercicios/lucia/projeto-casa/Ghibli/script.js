const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png';
logo.setAttribute('align', 'center');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);


async function StudioGhibli() {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
        const data = await response.json();
        data.forEach((film) => { 
        container.innerHTML += `
        <section class="card">
        <h1 class="titles">${film.title} | ${film.original_title}</h1>
        <img class="img" src=${film.image}>
         <p class="contents"><b>Description:</b> <span class="dynamic-text">${film.description}</span></p>
         <p class="contents"><b>Director:</b> <span class="dynamic-text">${film.director}</span></p>
         <p class="contents"><b>Producer:</b> <span class="dynamic-text">${film.producer}</span></p>
         <p class="contents"><b>Release date:</b> <span class="dynamic-text">${film.release_date}</span></p>
        </section>
       `
        });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  StudioGhibli();