const Jogo = function(px,py,vx,vy,width,height){
this.px = px;
this.py = py;
this.vx = vx;
this.vy = vy;
this.width = width;
this.height = height;
this.visible = true;
}

function draw(){
ctx.clearRect(0,0,cnv.width,cnv.height);

ctx.drawImage(fu,0,0,836,514,0,0,320,200);

for(var i in caixa){
var pos = caixa[i];
if(pos.visible){
ctx.drawImage(jo,pos.px,pos.py,pos.width,pos.height,pos.vx,pos.vy,pos.width,pos.height)
//desenha as balas
ctx.font = "bold 15px Arial";
ctx.fillStyle = "#000";
ctx.fillText("bala: " + balas, 50, 15);
//desenha os pontos
ctx.font = "bold 15px Arial";
ctx.fillStyle = "#000";
ctx.fillText("pontos: " + pontos ,185,15);

}
}
}
