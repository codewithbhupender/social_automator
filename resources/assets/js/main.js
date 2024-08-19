const typingText = document.querySelector('.typing-text');

const texts = ['Web Design', 'SEO', 'CRM solutions'];
let index = 0;
let charIndex = 0;
let isAdding = true;

const typeText = () => {
  if (isAdding) {
    if (charIndex < texts[index].length) {
      typingText.textContent += texts[index][charIndex];
      charIndex++;
    } else {
      isAdding = false;
    }
  } else {
    if (charIndex > 0) {
      typingText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
    } else {
      index++;
      charIndex = 0;
      isAdding = true;
      if (index >= texts.length) index = 0;
    }
  }
};

setInterval(typeText, 200);