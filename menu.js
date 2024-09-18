const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

const openSVG = document.getElementById('open')
const closeSVG = document.getElementById('close')

var open = false

menu.addEventListener('click', (e)=>{
    if(open){
        nav.classList.remove('actif')
        menu.classList.remove('actif')
        closeSVG.classList.remove('actif')
        openSVG.classList.add('actif')
        open = false
    }else{
        nav.classList.add('actif')
        menu.classList.add('actif')
        openSVG.classList.remove('actif')
        closeSVG.classList.add('actif')
        open = true
    }
})

