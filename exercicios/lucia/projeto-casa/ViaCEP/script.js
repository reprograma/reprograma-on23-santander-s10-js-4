
async function buscarCEP() {
    const cepInput = document.getElementById('cepInput');
    const cep = cepInput.value
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
  
      if (response.ok) {
        exibirResultado(data);
      } else {
        exibirMensagemErro('CEP não encontrado');
      }
    } catch (error) {
      exibirMensagemErro('Erro na busca do CEP');
    }
  }
  
  function exibirResultado(data) {
    const resultadoDiv = document.getElementById('resultado');
  
    resultadoDiv.innerHTML = `
      <p><strong>CEP:</strong> ${data.cep}</p>
      <p><strong>Logradouro:</strong> ${data.logradouro}</p>
      <p><strong>Bairro:</strong> ${data.bairro}</p>
      <p><strong>Cidade:</strong> ${data.localidade}</p>
      <p><strong>Estado:</strong> ${data.uf}</p>
      <p><strong>Código do IBGE:</strong> ${data.ibge}</p>
      <p><strong>DDD:</strong> ${data.ddd}</p>
    `;
  }
  
  function exibirMensagemErro(mensagem) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${mensagem}</p>`;
  }