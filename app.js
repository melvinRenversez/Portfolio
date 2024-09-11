const ciDessus = document.getElementById('ci-dessus')
const Accueil = document.getElementById('Accueil')
const reseaux_contact = document.getElementById('reseaux_contact')
const cv = document.getElementById('cv')
const stage = document.getElementById('stage')


ciDessus.addEventListener('click', (e) => {
    window.scrollTo({
        top: 490,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

Accueil.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

reseaux_contact.addEventListener('click', (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

cv.addEventListener('click', (e) => {
    window.scrollTo({
        top: 490,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

stage.addEventListener('click', (e) => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth' // Optionnel : fait défiler en douceur
    });
})

window.addEventListener('scroll', () => {
    // Obtenir le niveau de défilement vertical
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Afficher le niveau de défilement dans la console
    console.log(`Scroll: ${scrollTop}px`);


    if (scrollTop < 400) {
        removeActif()
        Accueil.classList.add('actif')
    }
    if (scrollTop >= 400) {
        removeActif()
        cv.classList.add('actif')
    }
    if (scrollTop >= 690) {
        removeActif()
        stage.classList.add('actif')
    }


});

function removeActif() {
    Accueil.classList.remove('actif')
    reseaux_contact.classList.remove('actif')
    cv.classList.remove('actif')
    stage.classList.remove('actif')
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