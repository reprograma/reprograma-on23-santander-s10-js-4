const container = document.getElementById("demo");

//Retornar estrutura HTML
function divFilme(filme) {
  return `
  <div class="card">
    <img class="image" src=${filme.image} >
    <h2 class="title">${filme.title}</h2>
    <br>
    <p class="paragraphDescription subTitle">Descrição: <span class="text">${filme.description}</span></p>
    <p class="subTitle">Diretor: <span class="text">${filme.director}</span></p>
    <p class="subTitle">Ano: <span class="text">${filme.release_date}</span></p>
  </div>
  `;
}

//Requisição da API
async function getFilmes() {
  try {
    const resposta = await fetch(`https://ghibliapi.vercel.app/films`);
    const filme = await resposta.json();
    const todosFilmes = filme.slice(0, 18);
    return todosFilmes;
  } catch (erro) {
    console.error("Erro capturado: " + erro);
  }
}

//Criar estrutura HTML
async function main() {
  const filmes = await getFilmes();
  filmes.map((filme) => (container.innerHTML += divFilme(filme)));
}

main();
