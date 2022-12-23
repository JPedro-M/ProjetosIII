const semaforo = document.getElementById('img');
const buttons = document.getElementById('buttons');

let colorIndex = 0;
let intervalId = 0;

const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
};
const nextIndex = () => colorIndex = colorIndex <2?++colorIndex:0;
const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors [colorIndex];
    turnOn[color]();
    nextIndex();
};
const stopAutomatic = () => {
    clearInterval(intervalId);
};
const turnOn = {
    'red' : () => semaforo.src = './img/vermelho.png',
    'yellow' : () => semaforo.src = './img/amarelo.png',
    'green' : () => semaforo.src = './img/verde.png',
    'automatic' : () => intervalId = setInterval(changeColor, 100),
    'off' : () => semaforo.src = './img/desligado.png'
};
buttons.addEventListener('click', trafficLight);