document.getElementById('prosseguirButton').addEventListener('click', function() {
    const nome = document.getElementById('nomeInput').value;
    localStorage.setItem('nome', nome);
    window.location.href = 'menu.html';
});