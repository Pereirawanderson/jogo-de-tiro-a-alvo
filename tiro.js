const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");
//variaves do jogos
var balas = 5;
var pontos = 0;
var texto1 = false;
var texto2 = false;
var caixa = [];
//imagem de fundo
var fu = new Image();
fu.src='tijolo.png';
//imagem dos objetos
var jo = new Image();
jo.src ="poto.png";
//audio de tiro
var som = new Audio();
som.src='Tiro.mp3';
//som do gatilio sem bala
var gatis = new Audio();
gatis.src = 'gati.mp3';
//objeto texto vc ganho
var texto1 = new Jogo(50,50,100,10,'vc ganha','color');
//texto1.visible = false;
caixa.push(texto1);

//objeto alvo de tiro
var alvo = new Jogo(24,0,100,-3,48,58);
alvo.visible = false;
caixa.push(alvo);
//objeto mao com arma
var casado = new Jogo(75, 9, 50, 50, 160, 190);
casado.velo = 8;
caixa.push(casado);
//funcao do botao de atira

function tiro(){
  acao()
}
//funcao que faz atira
function acao(){
setTimeout(function(){
alvo.visible = true;
casado.vy +=3;
},200);
som.play();
balas-=1;
var bala = new Jogo(0, 6,casado.vx+58,casado.vy+11,20,50);
caixa.push(bala);
bala.vible = true;
caixa.push(casado);

if(balas <= 0){//verifica se abalas acabou
gatis.play();//se a bala acabou play gatilio ativa
som.pause();// e o som do tiro para
balas = 0;//e bala zera se nao bala fica -1 e nuca zera
bala.visible = false; // bala para de aparese 
alert("vc pedeu deseja joga novamente");//avisa que vc perdeu
location.reload(); //reicia o jogo
}else if(bala.vy - alvo.vy === 6 && bala.vx - alvo.vx == 12){
alert("VOÇE!!! ganhou deseja joga novamente");//avisa q vc ganhou
location.reload(); //renicia o jogo
}
}
//funcao do botao para direita
function dire(){
casado.vx+= casado.velo;
alvo.visible = false;
}
//funcao do botao para esquerda
function esque(){
casado.vx -= casado.velo;
alvo.visible = false;
}
//funcao do botao para cima
function cima(){
casado.vy -= casado.velo;
alvo.visible = false;
}
//funcao do botao para baixo
function baixo(){
casado.vy += casado.velo;
}
//function velocidade do casador
function vel(){
casado.velo = 2;
}
//funcao restaura a velocidade
function up(){
casado.velo = 8;
}
//
function loop(){
draw();
requestAnimationFrame(loop);

}
loop();
