export default function messageVerification(message) {
  if (message.length < 10) {
    alert('Le message est trop court.');
    return false;
  } else if (message.length > 500) {
    alert('Le message est trop long.');
    return false;
  }

  const regexCaractereInterdit = /[<>]/;
  if (regexCaractereInterdit.test(message)) {
    alert('Le message contient des caractères interdits : < ou >.');
    return false;
  }

  if (message.trim() === '') {
    alert('Le message est vide ou ne contient que des espaces.');
    return false;
  }

  const regexRepetition = /(.)\1{9}/;
  if (regexRepetition.test(message)) {
    alert('Le message contient des répétitions abusives.');
    return false;
  }

  const motsInterdits = ['tocard'];
  for (let mot of motsInterdits) {
    if (message.includes(mot)) {
      alert('Le message contient un mot interdit.');
      return false;
    }
  }

  const regexURL = /https?:\/\/[^\s]+/;
  if (regexURL.test(message)) {
    alert("Le message ne doit pas contenir d'URL.");
    return false;
  }

  return true;
}
