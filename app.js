const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navBar = document.querySelector('.navbar')
const navLogo = document.querySelector('#navbar__logo')
//Display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    navBar.classList.toggle('is-active')
}

menu.addEventListener('click', mobileMenu)

//Close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 1600 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
        navBar.classList.remove('is-active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)