const ciDessus = document.getElementById('ci-dessus')

const accueil = document.getElementById('accueil')
const presentation = document.getElementById('presentation')
const cv = document.getElementById('cv')
const competence = document.getElementById('competence')
const stage = document.getElementById('stage')
const contact = document.getElementById('contact')

const popupDiv = document.getElementById('popup')

const colorSwitch = document.getElementById('colorSwitch')
const circle = document.getElementById('circle')

var actif = false

ciDessus.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth'
    });
})

accueil.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

presentation.addEventListener('click', (e) => {
    window.scrollTo({
        top: 700,
        behavior: 'smooth'
    });
})

cv.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth'
    });
})


competence.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1600,
        behavior: 'smooth'
    });
})

stage.addEventListener('click', (e) => {
    window.scrollTo({
        top: 2444,
        behavior: 'smooth'
    });
})

contact.addEventListener('click', (e) => {
    window.scrollTo({
        top: 3140,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    console.log(`Scroll: ${scrollTop}px`);

    if (scrollTop < 500) {
        removeActif()
        accueil.classList.add('actif')
    }
    if (scrollTop >= 500) {
        removeActif()
        presentation.classList.add('actif')
    }
    if (scrollTop >= 1100) {
        removeActif()
        cv.classList.add('actif')
    }
    if (scrollTop >= 1500) {
        removeActif()
        competence.classList.add('actif')
    }
    if (scrollTop >= 2200) {
        removeActif()
        stage.classList.add('actif')
    }
    if (scrollTop >= 2970) {
        removeActif()
        contact.classList.add('actif')
    }



});

function removeActif() {
    accueil.classList.remove('actif')
    presentation.classList.remove('actif')
    cv.classList.remove('actif')
    competence.classList.remove('actif')
    stage.classList.remove('actif')
    contact.classList.remove('actif')
}

function downloadCV() {
    const link = document.createElement('a');

    link.href = 'assets/download/CV.pdf';
    link.download = 'CV_Melvin_Renversez.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.querySelectorAll('.copy').forEach(function(h1) {
    h1.addEventListener('click', function() {
        var email = h1.innerText;
        navigator.clipboard.writeText(email).then(function() {
            let text = email + " copier dans le press papier"
            popup(text)
            console.log("Texte copié : " + email);
        }).catch(function(error) {
            console.error("Erreur lors de la copie : ", error);
        });
    });
});

function popup(text) {
    popupDiv.innerHTML = text
    popupDiv.classList.add('actif')
    setTimeout(() => {
        closePopup()
    }, 5000);
}

function closePopup() {
    popupDiv.classList.remove('actif')
}

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