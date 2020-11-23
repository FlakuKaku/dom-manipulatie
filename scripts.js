const myName = 'Hi Paul';
const messageElement = document.getElementById('message');
const colors = ['red', 'green', 'blue', 'orange', 'yellow'];

function myFunction() {
    if (messageElement.innerHTML === myName) {
        messageElement.innerHTML = '';
    } else {
        messageElement.innerHTML = myName;
    }
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    messageElement.style.color = randomColor;
};

