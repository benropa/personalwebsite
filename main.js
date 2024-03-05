const messageElement = document.getElementById('message');
const messageText = 'Hello, Welcome to My Website.';

let index = 0;

function typeMessage() {
  if (index < messageText.length) {
    messageElement.textContent += messageText.charAt(index);
    index++;
    setTimeout(typeMessage, 100); // typing speed here (milliseconds)
  } else {
    // Add blinking cursor after typing
    messageElement.innerHTML += '<span class="blink"></span>';
  }
}

typeMessage();
