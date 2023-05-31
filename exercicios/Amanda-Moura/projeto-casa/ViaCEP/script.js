const container = document.getElementById('demo');

function createCard(endereco) {
  return `
    <div class="card">
      <h2 class="title">${endereco.cep}</h2>
      <p class="rua">${endereco.logradouro}</p>
      <p class="bairro">${endereco.bairro}</p>
      <p class="complemento">${endereco.complemento}</p>
      <p class="localidade">${endereco.localidade}</p>
      <p class="uf">${endereco.uf}</p>
    </div>
  `;
}

async function getCep(cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await response.json();
    const endereco = json;
    return endereco;
  } catch (erro) {
    console.error("Erro capturado: " + erro);
    alert(`Deu erro BOYZAO, DIGITE de novo ai vá lá. Oia o erro: ${erro}`)
    return
  }
}

async function main() {
  const cepInput = document.createElement("input");
  cepInput.setAttribute("type", "number");
  cepInput.setAttribute("id", "cepInput");
  cepInput.placeholder = "Digite o CEP";
  container.appendChild(cepInput);

  const searchButton = document.createElement("button");
  searchButton.textContent = "Consultar";
  searchButton.addEventListener("click", inputCep)

async function inputCep(){
    const cep = document.getElementById("cepInput").value;
    const endereco = await getCep(cep);
    const card = createCard(endereco);
    container.innerHTML = card;
}
  container.appendChild(searchButton);
}

main();