const myName = 'Hi Paul';
const messageElement = document.getElementById('message');
function myFunction() {
    if (messageElement.innerHTML === myName) {
        messageElement.innerHTML = '';
    } else {
        messageElement.innerHTML = myName;
    }
}

