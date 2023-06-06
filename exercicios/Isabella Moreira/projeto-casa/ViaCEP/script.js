const buttonConsultar = document.getElementById('submit')

buttonConsultar.addEventListener('click', (event) => {
    event.preventDefault()
    cep = document.getElementById('cep').value
    getAdress(cep)
})

async function getAdress(cep){
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const address = await response.json()
        document.getElementById('cep').value = address.cep
        document.getElementById('logradouro').value = address.logradouro
        document.getElementById('bairro').value = address.bairro
        document.getElementById('localidade').value = address.localidade
        document.getElementById('uf').value = address.uf
    }
    catch(erro){
        console.error("Capturei um erro" + erro)
    }
    
}