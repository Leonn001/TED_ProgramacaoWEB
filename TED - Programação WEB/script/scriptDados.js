const dadosSalvosString = localStorage.getItem('dadosSalvos');

const dadosSalvos = JSON.parse(dadosSalvosString);

const listapedidos = document.getElementById('listapedidos');


dadosSalvos.forEach(dados => {
    const itemLista = document.createElement('li');
    const nomeElement = document.createElement('h4');
    const descricaoElement = document.createElement('p');

    nomeElement.textContent = dados.nome;
    descricaoElement.textContent = dados.descricao;

    itemLista.appendChild(nomeElement);
    itemLista.appendChild(descricaoElement);
    listapedidos.appendChild(itemLista);
});