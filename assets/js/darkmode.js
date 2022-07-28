function escolherModo() {
    trocarClasse();
}

function trocarClasse() {
    BtnDm.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
    a.classList.toggle('dark-mode');
    textoApresentacao.classList.toggle('dark-mode');
}

const BtnDm = document.getElementById('btn-dm');
const textoApresentacao = document.getElementsByClassName('texto-apresentacao');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const a = document.getElementsByTagName('a')[0];



BtnDm.addEventListener('click', escolherModo);