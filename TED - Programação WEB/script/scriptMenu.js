const prato = document.querySelectorAll('.prato');
const buttons = document.querySelectorAll('.button');  
const nomeSalvo = localStorage.getItem('nome');
const nomePlaceholder = document.getElementById('nomePlaceholder');
const imagem = document.querySelectorAll('.img');

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
    const imagem = div.querySelector('img');
  
    if (nomeElement !== null && descricaoElement !== null) {
      const nome = nomeElement.textContent;
      const descricao = descricaoElement.textContent;
      const img = imagem.getAttribute('src');
      const dados = {
        nome: nome,
        descricao: descricao,
        img: img,
      };
  
      dadosSalvos.push(dados);
    }
  });

  localStorage.setItem('dadosSalvos', JSON.stringify(dadosSalvos));
  
  console.log(dadosSalvos);
  
  window.location.href = 'pagina-dados.html';
}

document.querySelector('.salvarDados').addEventListener('click', salvarDadosEProsseguir);

  