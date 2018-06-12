const ws = new WebSocket('ws://localhost:4321');

ws.onopen = () => {
  setTitle('Connected to the Server');
};

ws.onclose = () => {
  setTitle('DISCONNECTED');
};

ws.onmessage = payload => {
  printMessage(payload.data);
};

document.forms[0].onsubmit = function () {
    var input = document.getElementById('message');
    input.value = '';
};

function setTitle(title) {
    document.querySelector('h1').innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement('p');
    p.innerText = message;
    document.querySelector('div.messages').appendChild(p);
}
