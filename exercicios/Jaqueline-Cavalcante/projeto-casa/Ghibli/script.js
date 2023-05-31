const filmListLine1Element = document.getElementById('film-list-line1');
    const filmListLine2Element = document.getElementById('film-list-line2');
    const filmListLine3Element = document.getElementById('film-list-line3');
    

    fetch('https://ghibliapi.vercel.app/films')
      .then(response => response.json())
      .then(data => {
        const line1Films = data.slice(0,7);
        const line2Films = data.slice(7,14);
        const line3Films = data.slice(14,22 );
       

        populateFilmList(line1Films, filmListLine1Element);
        populateFilmList(line2Films, filmListLine2Element);
        populateFilmList(line3Films, filmListLine3Element);
        
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
    
    function populateFilmList(films, container) {
      films.forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('film-card');
    
        const titleElement = document.createElement('h2');
        titleElement.textContent = film.title;
    
        const directorElement = document.createElement('p');
        directorElement.textContent = `Director: ${film.director}`;
    
        const releaseYearElement = document.createElement('p');
        releaseYearElement.textContent = `Release Year: ${film.release_date}`;
    
        const imageElement = document.createElement('img');
        imageElement.src = film.image;

        
        
    
        filmCard.appendChild(titleElement);
        filmCard.appendChild(directorElement);
        filmCard.appendChild(releaseYearElement);
        filmCard.appendChild(imageElement);
        
    
        container.appendChild(filmCard);
      });
    }
     