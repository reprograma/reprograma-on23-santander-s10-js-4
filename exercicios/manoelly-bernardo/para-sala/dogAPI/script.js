const container = document.getElementById('demo');

async function getDoguinho(raca) {
    try {
      const respota = await fetch(`https://dog.ceo/api/breed/${raca}/images/random`);
      const dados = await respota.json();
      container.innerHTML = `<img src=${dados.message}>`;
    } catch (error) {
      console.error('Error capturado: ' + error);
    }
}

getDoguinho('akita');