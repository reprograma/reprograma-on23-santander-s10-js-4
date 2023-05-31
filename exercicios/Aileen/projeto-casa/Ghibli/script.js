const moviesListElement = document.getElementById('movies-list');

fetch('https://ghibliapi.vercel.app/films')
  .then(response => response.json())
  .then(data => {
    data.forEach(movie => {
      const listItem = document.createElement('li');
      const titleElement = document.createElement('h2');
      titleElement.classList.add('movie-title');
      titleElement.textContent = movie.title;
      const descriptionElement = document.createElement('p');
      descriptionElement.classList.add('movie-description');
      descriptionElement.textContent = movie.description;
      listItem.appendChild(titleElement);
      listItem.appendChild(descriptionElement);
      moviesListElement.appendChild(listItem);
    });
  })
  .catch(error => console.log(error));