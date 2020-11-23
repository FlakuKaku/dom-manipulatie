const myName = 'Paul';
const messageElement = document.getElementById('message').innerHTML += myName;
function myFunction() {
    var x = document.getElementById('message');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none'
    }
}

