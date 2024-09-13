const ciDessus = document.getElementById('ci-dessus')

const accueil = document.getElementById('accueil')
const presentation = document.getElementById('presentation')
const cv = document.getElementById('cv')
const competence = document.getElementById('competence')
const stage = document.getElementById('stage')
const contact = document.getElementById('contact')

const popupDiv = document.getElementById('popup')

ciDessus.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

accueil.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

presentation.addEventListener('click', (e) => {
    window.scrollTo({
        top: 700,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

cv.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1200,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})


competence.addEventListener('click', (e) => {
    window.scrollTo({
        top: 1600,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

stage.addEventListener('click', (e) => {
    window.scrollTo({
        top: 2444,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

contact.addEventListener('click', (e) => {
    window.scrollTo({
        top: 3140,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

window.addEventListener('scroll', () => {
    // Obtenir le niveau de défilement vertical
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Afficher le niveau de défilement dans la console
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

    // Spécifier l'URL du fichier PNG
    link.href = 'assets/download/CV.png'; // Assurez-vous que ce chemin est correct
    link.download = 'cv_melvin_renversez.png'; // Nom du fichier téléchargé

    // Ajouter le lien au document, cliquer dessus pour déclencher le téléchargement, puis le supprimer
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.querySelectorAll('.copy').forEach(function(h1) {
    h1.addEventListener('click', function() {
        var email = h1.innerText; // Récupère le texte de l'élément cliqué
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