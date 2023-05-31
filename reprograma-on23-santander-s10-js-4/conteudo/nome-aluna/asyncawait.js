
function criarVariavel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return reject(new Error('ERRO NA API - BUGOU TUDO'))
      // return resolve('Pati')
    }, 3000)
  })
}

async function resolverPromesa() {
  try {
    const nomeMonitora = await criarVariavel()
    console.log(nomeMonitora)
  }
  catch(erro) {
    console.error("erro capturado: " + erro)
  }
} // função assincrona = retorna uma Promessa

resolverPromesa()

console.log('continua')
