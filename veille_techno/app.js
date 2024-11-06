const colorSwitch = document.getElementById('colorSwitch')
const circle = document.getElementById('circle')

const scroll = document.getElementById('scroll')

var actif = false

colorSwitch.addEventListener('click', () => {
    if (actif == false) {
        circle.classList.add('actif')
        document.body.classList.add('actif')
        actif = true
    } else {
        circle.classList.remove('actif')
        document.body.classList.remove('actif')
        actif = false
    }
})

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 0){
        scroll.classList.add('top')
        scroll.classList.remove('bottom')
    }else{
        scroll.classList.add('bottom')
        scroll.classList.remove('top')
    }
}); 

scroll.addEventListener('click', (e)=>{
    var pos = scroll.classList[0]
    if(pos == "bottom"){
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})