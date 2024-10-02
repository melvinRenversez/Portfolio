const colorSwitch = document.getElementById('colorSwitch')
const circle = document.getElementById('circle')

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