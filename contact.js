(function() {
    emailjs.init("4wXxxOITTUo3oj8FB");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_bq3858t'; 
    const templateID = 'template_semal8g';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            popup("Email envoyé avec succès à melvin.")
        }, (err) => {
            alert('L\'envoi de l\'email a échoué!\r\n Response:\n ' + JSON.stringify(err));
        });

    document.getElementById('contact-form').reset();

});