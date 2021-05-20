const btnAtivar = document.getElementById('ativar');

btnAtivar.addEventListener('click', () => {

    const circle1 = document.getElementById('circle1');
    const circle2 = document.getElementById('circle2');
    const glass = document.getElementById('glass');
    const modal = document.getElementById('modal');
    modal.classList.toggle('animar');
    glass.classList.toggle('animar');
    circle1.classList.toggle('animar');
    circle2.classList.toggle('animar');
    
});

const btnLogar = document.getElementById('logar');

btnLogar.addEventListener('click', () => {

    const load = document.getElementById('load');
    load.classList.toggle('load');
    
});


