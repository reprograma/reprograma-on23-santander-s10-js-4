// TODO: evento de click 
// TODO: função pra requisição
// TODO: adiciona as informações nos inputs

const button = document.getElementById('submit');

button.addEventListener('click', (event) => {
  event.preventDefault()
  clearFields()
  const cep = document.getElementById('cep').value
  main(cep)
})

async function getAddress(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const address = await response.json()
    return address
  }
  catch(erro) {
    console.error('Capturei um erro: ' + erro)
  }
}

function fillFields(address) {
  document.getElementById('cep').value = address.cep
  document.getElementById('logradouro').value = address.logradouro
  document.getElementById('bairro').value = address.bairro
  document.getElementById('localidade').value = address.localidade
  document.getElementById('uf').value = address.uf
}

function clearFields() {
  document.getElementById('error').style.display = "none";
  document.getElementById('logradouro').value = "" 
  document.getElementById('bairro').value = "" 
  document.getElementById('localidade').value = "" 
  document.getElementById('uf').value = "" 
}

async function main(cep) {
  if(cep != undefined && !isNaN(cep) && cep.length == 8) {
    const address = await getAddress(cep)
    fillFields(address)
  } else {
    document.getElementById('error').style.display = "block";
  }
}
