const dadosSalvosString = localStorage.getItem('dadosSalvos');
const dadosSalvos = JSON.parse(dadosSalvosString);

const listapedidos = document.getElementById('listapedidos');
const imagem = document.querySelector('.img');


dadosSalvos.forEach(dados => {
    const itemLista = document.createElement('li');
    const nomeElement = document.createElement('h4');
    const descricaoElement = document.createElement('p');
    const imagemElement = document.createElement('img');

    nomeElement.textContent = dados.nome;
    descricaoElement.textContent = dados.descricao;
    imagemElement.setAttribute('src', dados.img);
    imagemElement.classList.add('img');


    itemLista.appendChild(nomeElement);
    itemLista.appendChild(descricaoElement);
    listapedidos.appendChild(itemLista);
    itemLista.appendChild(imagemElement);
});