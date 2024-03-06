const messageElement = document.getElementById('message');
const messageText = `Hi, welcome to my Website.`;

let index = 0;

function typeMessage() {
  if (index < messageText.length) {
    messageElement.textContent += messageText.charAt(index);
    index++;
    setTimeout(typeMessage, 150); // Adjust typing speed here (milliseconds)
  } else {
    messageElement.innerHTML += '<span class="blink"></span>';
  }
}

typeMessage();
