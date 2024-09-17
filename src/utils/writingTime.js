let textEntryDuration = 0;

export default function writingTime() {
  const messageField = document.querySelector('#floatingTextarea');
  let textEntryStart, textEntryEnd;

  messageField.addEventListener('focus', () => {
    textEntryStart = new Date();
  });

  messageField.addEventListener('blur', () => {
    textEntryEnd = new Date();
    textEntryDuration = textEntryEnd - textEntryStart;
  });
}

export function getWritingDuration() {
  return textEntryDuration;
}
