const container = document.getElementById("demo")


async function getDog() {
    try{
        const resposta = await fetch(`https://dog.ceo/api/breeds/image/random`)
        const dados = await resposta.json()
       
        const imagem = document.createElement('img')
        imagem.setAttribute('src', dados.message)
        container.appendChild(imagem)
    }
    catch(erro){
        console.erro(`deu bug viss: ${erro}`)
    }
}

getDog()