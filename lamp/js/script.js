function isQuebrada(){
    return document.getElementById('lampada').src.indexOf('img/quebrada.png') > -1;
}
function ligar(){
    if(!isQuebrada()){
    document.getElementById('lampada').src = './img/ligada.png';
    document.getElementById('body').style.background = 'rgb(235, 235, 235)';
    document.getElementById('body').style.color = 'black';
    document.getElementById('lampada').style.filter = 'drop-shadow(0px 0px 100px rgb(238, 255, 0))'
    }
}
function desligar(){
    if(!isQuebrada()){
        document.getElementById('lampada').src = './img/desligada.png';
        document.getElementById('body').style.background = 'black';
        document.getElementById('body').style.color = 'white';
        document.getElementById('lampada').style.filter = 'drop-shadow(0px 0px 0px)'
    }
}
function quebrada(){
    document.getElementById('lampada').src = './img/quebrada.png';
    document.getElementById('body').style.background = 'black';
    document.getElementById('body').style.color = 'white';
    document.getElementById('lampada').style.filter = 'drop-shadow(0px 0px 0px)'
}

document.getElementById('lampada').addEventListener('mouseover',ligar)
document.getElementById('lampada').addEventListener('mouseleave', desligar);