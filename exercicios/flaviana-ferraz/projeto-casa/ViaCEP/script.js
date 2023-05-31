const  container = document.getElementById('demo')

function cepData(data){
    return `    
    <div class="general_data">
        <input></input>
        <p class="street"> ${data.logradouro} </p></br>
        <p class="complement"> ${data.complemento} </p></br>
        <p class="neighborhood"> ${data.bairro} </p></br>
        <p class="city"> ${data.localidade} </p>
        <p class="state">${data.uf}</p>
    </div>
    `
}

async function getAddress(){
    try{
        const cep = await fetch(`https://viacep.com.br/ws/${data.cep}/json/`)
        const json = await cep.json()
        return json
    }
    catch(erro){
        console.error("Erro identificado: " + erro)
    }
}

async function main(){
    const address = await getAddress()
    address.map((data) => container.innerHTML += cepData(data) )
}

main()

getAddress()