
//Boa tarde prof, esse é o meu código próprio com fundamentos que eu sei do js+ AS SUAS AULAS. Espero que esteja correto. Não mexi muito no meu css porque eu estou acompanhando minha mãe nas consultas oncologicas e ai fica tudo corrido com o trabalho mas dei meu melhor e espero me esforçar muito mais. 

fetch("https://ghibliapi.vercel.app/films")
.then(resp => resp.json())
.then(data => exibir(data))
.catch(error=> console.error("Erro:", error))

function exibir(data){

    const container = document.querySelector(".container-dados")
    
    data.forEach((dado, i) => {

        
        // Cria a div principal para cada filme
        const divFilm = document.createElement('div')
        divFilm.classList.add('container-film', 'filme-'+i)

        
        // Cria a div para os dados do filme
        const divDados = document.createElement('div')
        divDados.classList.add('container-info')

        //Obtém URL da imagem, e cria um elemento img no HTML com essa URL de referência
        const img = dado.image
        const imagem = document.createElement('img');
        imagem.src = img;

        // Adiciona a imagem e a div de dados à div principal do filme
        divFilm.appendChild(imagem)        
        divFilm.appendChild(divDados)

        // Valores, chaves e titulos selecionados
        const values = [dado.title, dado.description, dado.director, dado.release_date, dado.running_time, dado.rt_score]
        const keys = ['title', 'description', 'director', 'release_date', 'running_time', 'rt_score'];
        const idKey = ['Title', 'Description', 'Director', 'Release date', 'Running time', 'Rotten Tomatoes score']

        //Itera sobre as chaves, criando spans com os valores correspondentes
        keys.forEach((key, index) => {
          const value = values[index]
          const span = document.createElement('span')
          
          //Define o texto de cada span contendo primeiro o titulo da chave e depois seu valor, como "Title: Castle in the Sky"
          span.textContent = idKey[index] + ': ' + value;
          span.id = key


          divDados.appendChild(span)
     })

        // Adiciona a div do filme ao container principal
        container.appendChild(divFilm) 
      })
}