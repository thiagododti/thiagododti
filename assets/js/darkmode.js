function escolherModo() {
    trocarClasse();
    trocaTexto();
}

function trocarClasse() {
    BtnDm.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
    a.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    h2.classList.toggle(darkModeClass);
    header.classList.toggle(darkModeClass);
}

function trocaTexto() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";
    if (BtnDm.classList.contains(darkModeClass)) {
        BtnDm.innerHTML = lightMode;
        return;
    }

    BtnDm.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const BtnDm = document.getElementById('btn-dm');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const a = document.getElementsByTagName('a')[0];
const h1 = document.getElementsByTagName('h1')[0];
//const h2 = document.getElementsByTagName('h2')[0];
const header = document.getElementsByTagName('header')[0];



BtnDm.addEventListener('click', escolherModo);