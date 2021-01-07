
const elemH1 = document.querySelector('h1')
const elemH2 = document.querySelector('h2')
const linkSkills = document.querySelectorAll('li.nav-item a')[2]

const posicionDeLasSecciones = {
    "home" : 0,
    "aboutMe" : obtenerPosicionPorId('#about-me'),
    "skills" : obtenerPosicionPorId('#skills'),
    "portfolio" : obtenerPosicionPorId('#portfolio'),
}

document.addEventListener('DOMContentLoaded', () => {

    // Mostrar h1 y h2 
    setTimeout(() => {
        elemH1.classList.add('translate-0')
        elemH2.classList.add('translate-0')
    }, 300)
        
    // Agregar clase active en la barra de navegacion
    document.addEventListener('scroll', activarEnlaceBarraNavegacion )

})


// Scroll de la barra de navegacion
scrollNav()
function scrollNav() {
    const links = document.querySelectorAll(".nav-link");

    //Agrego el evento click
    links.forEach( (link) => {
        link.addEventListener('click', agregarScroll )
    })

}
function agregarScroll(e) {
    e.preventDefault();
    const href = this.getAttribute("href")
    // offsetTop devuelve la posicion del elemento en pixeles
    const offsetTop = document.querySelector(href).offsetTop
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

// Activar enlace de la barra de navegacion por posicion de la web
function activarEnlaceBarraNavegacion(){

    const radioPosicion = 50 // 10 px arriba y abajo
    const {home, aboutMe, skills, portfolio} = posicionDeLasSecciones
    const posicionActualVentana = window.scrollY
    
    validarPosicion(posicionActualVentana, home, radioPosicion, '.nav-link-home')
    validarPosicion(posicionActualVentana, aboutMe, radioPosicion, '.nav-link-aboutMe')
    validarPosicion(posicionActualVentana, skills, radioPosicion, '.nav-link-skills')
    validarPosicion(posicionActualVentana, portfolio, radioPosicion, '.nav-link-portfolio')

}
// Validar posicion scroll y activar Nav-Item
function validarPosicion(posicionActual, seccion, radio, classItem){
    if( posicionActual > seccion - radio && posicionActual < seccion + radio ){
        activarNavItemPorScroll( classItem )
    }
}
// Activar Nav-Item por Scroll 
function activarNavItemPorScroll( classNavItem ){
    const navItems = document.querySelectorAll('.nav-item')
    navItems.forEach( item => {
        item.classList.remove('active')
    })

    const navItem = document.querySelector( classNavItem ).parentElement;
    navItem.classList.add('active')
}

// Obtener posicion por id
function obtenerPosicionPorId( id ){
    return document.querySelector(id).offsetTop
}