const container = document.getElementById('container');
const inputCep = document.getElementById('input-cep');

async function getAddress() {
  try {
    const cep = inputCep.value;
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await response.json();
    console.log(dados)
    return dados;
  } catch (error) {
    console.error(error);
  }
}

async function descriptionAddress(event) {
  event.preventDefault();
  const address = await getAddress();
  container.innerHTML = `
  <div>
    <h2>Endereço encontrado:</h2>
    <p>Logradouro: ${address.logradouro}</p>
    <p>Bairro: ${address.bairro}</p>
    <p>Cidade: ${address.localidade}</p>
    <p>Estado: ${address.uf}</p>
  </div>
  `
}


addEventListener('submit', descriptionAddress);
