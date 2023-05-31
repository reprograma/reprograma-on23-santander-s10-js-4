// function criarVariavel() {
//   setTimeout(() => {
//     // return reject(new Error('ERRO NA API - BUGOU TUDO'))
//     return resolve('Pati')
//   }, 3000)
// }

// const nomeMonitora = criarVariavel()

// console.log(nomeMonitora)

// promise

function criarVariavel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject(new Error('ERRO NA API - BUGOU TUDO'))
      return resolve('Pati')
    }, 3000)
  })
}

// console.log(criarVariavel())

criarVariavel()
  .then((resposta) => console.log(resposta))
  .catch((erro) => console.log("erro capturado:"+ erro))


