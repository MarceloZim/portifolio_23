function readText(){
    function activeLatter(element){
        const arrTexto = element.innerHTML.split('');
        element.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i)
        });
    }
    const titulo = document.querySelector('.digitando');
    activeLatter(titulo);
}
readText()

const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria')


ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('active')
})

