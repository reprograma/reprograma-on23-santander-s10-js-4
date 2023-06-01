const container = document.getElementById('demo')

async function getDoguinho(films) {
    try {
        const resposta = await fetch(`https://ghibliapi.vercel.app/films`)
        const dados = await resposta.json()
        console.log(dados)
        const image = document.createElement('img')
        image.setAttribute('src', dados.message)
        container.appendChild(image)

    } catch (erro) {
        console.error("capturei um erro" + erro)
    }
}

getDoguinho('Grave of the Fireflies')