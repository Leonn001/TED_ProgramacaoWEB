const prato = document.querySelectorAll('.prato');
const buttons = document.querySelectorAll('.button');  
const nomeSalvo = localStorage.getItem('nome');
const nomePlaceholder = document.getElementById('nomePlaceholder');

if (nomeSalvo) {
  nomePlaceholder.textContent = nomeSalvo;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const div = button.closest('.prato');

    if (div) {
      if (div.classList.contains('chosen')) {
        div.classList.remove('chosen');
      } else {
        div.classList.add('chosen');
      }
    }
  });
});

function salvarDadosEProsseguir() {
  const dadosSalvos = [];
  const divs = document.querySelectorAll('.chosen');
  divs.forEach(div => {
    const nomeElement = div.querySelector('h4');
    const descricaoElement = div.querySelector('p');
  
    if (nomeElement !== null && descricaoElement !== null) {
      const nome = nomeElement.textContent;
      const descricao = descricaoElement.textContent;
      const dados = {
        nome: nome,
        descricao: descricao,
      };
  
      dadosSalvos.push(dados);
    }
  });

  localStorage.setItem('dadosSalvos', JSON.stringify(dadosSalvos));
  
  console.log(dadosSalvos);
  
  window.location.href = 'pagina-dados.html';
}

document.querySelector('.salvarDados').addEventListener('click', salvarDadosEProsseguir);

  