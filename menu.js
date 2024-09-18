const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

const openSVG = document.getElementById('open')
const closeSVG = document.getElementById('close')

var open = false

menu.addEventListener('click', (e)=>{
    if(open){
        nav.classList.remove('actif')
        closeSVG.classList.remove('actif')
        openSVG.classList.add('actif')
        open = false
    }else{
        openSVG.classList.remove('actif')
        closeSVG.classList.add('actif')
        nav.classList.add('actif')
        open = true
    }
})

