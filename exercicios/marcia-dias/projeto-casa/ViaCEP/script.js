// const container = document.getElementById("cep")

function consultaEndereco(){
    const cep = document.querySelector("#cep").value;

    if (cep.length !==8){
        alert("CEP inválido - Digite Novamente");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
    });


function mostrarEndereco(dados){
    const resultado = document.querySelector("#resultado");
    if (dados.erro) {
        resultado.innerHTML = "Endereço não localizado!";
    } else {
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade}</p>
                            <p>Estado: ${dados.uf}</p>
                            `
    }
}
}

consultaEndereco()