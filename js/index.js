function validaBusca() {
    if (document.querySelector('#q').value == '') {
        alert('NÃO PODE PESQUISAR EM BRANCO');
        return false;
    }
}
document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/html.png", "./img/css.png","./img/js.png"];
var bannerAtual = 0;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector('.destaque-troca img').src = banners[bannerAtual];
}

var timer = setInterval(trocaBanner, 1000);

var controle = document.querySelector('.pause');

controle.onclick = function () {
    if (controle.className == 'pause') {
        clearInterval(timer);
        controle.className = 'play';
        controle.innerText = 'Play';  // Muda o texto para "Play"
    } else {
        timer = setInterval(trocaBanner, 1000);
        controle.className = 'pause';
        controle.innerText = 'Pause';  // Muda o texto para "Pause"
    }
    return false;
};
