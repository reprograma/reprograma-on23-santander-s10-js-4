function buscarCEP() {
    var cep = document.getElementById('cep-input').value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          alert('CEP não encontrado.');
          resetFields();
        } else {
          document.getElementById('logradouro').textContent = data.logradouro;
          document.getElementById('bairro').textContent = data.bairro;
          document.getElementById('localidade').textContent = data.localidade;
          document.getElementById('uf').textContent = data.uf;
          document.getElementById('result').style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
        resetFields();
      });
  }

  function resetFields() {
    document.getElementById('logradouro').textContent = '';
    document.getElementById('bairro').textContent = '';
    document.getElementById('localidade').textContent = '';
    document.getElementById('uf').textContent = '';
    document.getElementById('result').style.display = 'none';
  }