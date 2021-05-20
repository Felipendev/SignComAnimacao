var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var xAleatorio = sorteiaPosicao;
var yAleatorio = sorteiaPosicao;
var raio = sorteiaPosicao;

function atualizaTela() {

    limpatela();

    xAleatorio = sorteiaPosicao(1000);
    yAleatorio = sorteiaPosicao(500)
    raio = sorteiaPosicao(100);
    desenhaAlvo(sorteiaPosicao(800), sorteiaPosicao(400));
    desenhaAlvo(sorteiaPosicao(400), sorteiaPosicao(300));
}

var intervaloDeAparicao = setInterval(atualizaTela, 2000);