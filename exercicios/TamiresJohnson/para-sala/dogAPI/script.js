const container = document.getElementById('demo')

async function getDoguinho(raca) {

  try {
    const resposta = await fetch(`https://dog.ceo/api/breed/${raca.toLowerCase()}/images/random`)
    const dados = await resposta.json()
    console.log(dados)
    const imagem = document.createElement('img')
    imagem.setAttribute('src', dados.message)
    container.appendChild(imagem)
  }
  catch(erro) {
    console.error("capturei um erro: " + erro)
  }
}

getDoguinho('Akita')

