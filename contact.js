// Initialisation d'EmailJS
(function() {
    emailjs.init("4wXxxOITTUo3oj8FB"); // Remplacez par votre User ID EmailJS
})();

// Gestion de la soumission du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Paramètres EmailJS
    const serviceID = 'service_bq3858t'; // Remplacez par votre service ID EmailJS
    const templateID = 'template_semal8g'; // Remplacez par votre template ID EmailJS

    // Envoi du formulaire via EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            popup("Email envoyé avec succès à melvin.")
        }, (err) => {
            alert('L\'envoi de l\'email a échoué!\r\n Response:\n ' + JSON.stringify(err));
        });

    document.getElementById('contact-form').reset();

});