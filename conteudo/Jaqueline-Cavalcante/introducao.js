function criarVariavel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject ( new Error ('ERRO NA API-BUGOU TUDO'))
return resolve('Pati'), 3000        })
    })
}
