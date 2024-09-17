import messageVerification from './verifMessage.js';
import writingTime, { getWritingDuration } from './writingTime.js';

export default function formHandler() {
  writingTime();

  const form = document.querySelector('#form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    const writingDuration = getWritingDuration();

    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
      alert('Veuillez valider le reCAPTCHA.');
      return;
    }

    if (!messageVerification(formObject.message)) {
      return;
    } else if (writingDuration < 10000) {
      alert(
        "Le message a été saisi trop rapidement. Veuillez vérifier que vous n'avez pas fait d'erreur ou que vous êtes humain."
      );
      return;
    }

    alert(
      'Merci, votre message a bien été envoyé. Je reviens vers vous dès que possible.'
    );

    fetch('http://localhost:4836/form/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formObject, recaptchaResponse }),
    });

    form.reset();
    grecaptcha.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
