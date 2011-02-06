// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function drawCircles(ctx) {
  ctx.fillStyle   = 'rgba(255,237,34,1)';
  ctx.beginPath();
  ctx.arc(150,100,100,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle   = 'rgb(248,0,255)';
  ctx.beginPath();
  ctx.arc(150,100,85,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle   = 'rgb(76,255,3)';
  ctx.beginPath();
  ctx.arc(150,100,70,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  
  ctx.fillStyle   = 'rgb(0,190,255)';
  ctx.beginPath();
  ctx.arc(150,100,55,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle   = 'rgb(108,0,255)';
  ctx.beginPath();
  ctx.arc(150,100,40,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle   = 'rgb(30,30,30)';
  ctx.beginPath();
  ctx.arc(150,100,25,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function drawBubble(ctx) {
  var bubble_grad = ctx.createLinearGradient(0,0,0,35);
  bubble_grad.addColorStop(0.5,    'rgb(76,190,3)');
  bubble_grad.addColorStop(1.0, 'rgb(76,255,3)');
  
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur    = 0;
  ctx.shadowColor   = 'rgba(0, 0, 0, 1.0)';
  ctx.fillStyle   = bubble_grad;
  //ctx.strokeStyle = 'rgb(76,142,0)';
  ctx.beginPath();
  ctx.moveTo(25,0);
  ctx.quadraticCurveTo(0,0,0,20);
  ctx.quadraticCurveTo(0,40,20,40);
  ctx.quadraticCurveTo(20,50,35,50);
  ctx.quadraticCurveTo(30,50,30,40);
  ctx.quadraticCurveTo(50,40,50,20);
  ctx.quadraticCurveTo(50,0,25,0);
  ctx.fill();
  //ctx.stroke();
}

function drawSkyline(ctx) {
  // skyscraper
  ctx.fillStyle   = 'rgb(108,0,255)';
  ctx.beginPath();
  ctx.rect(10, 90, 25, 30)
  ctx.closePath();
  ctx.fill();
  
  // skyscraper
  ctx.fillStyle   = 'rgb(0,0,0)';
  ctx.beginPath();
  ctx.rect(30, 100, 20, 20)
  ctx.rect(45, 85, 25, 35)
  ctx.rect(65, 75, 35, 45)
  ctx.rect(130, 60, 40, 60)
  ctx.rect(170, 70, 30, 50)
  ctx.rect(200, 80, 20, 40)
  ctx.rect(220, 90, 30, 30)
  ctx.rect(240, 50, 40, 70)
  ctx.closePath();
  ctx.fill();
  
  // heinrich-hertz-turm
  ctx.beginPath();
  ctx.moveTo(108,120);
  ctx.lineTo(110,68);
  ctx.lineTo(105,65);
  ctx.lineTo(105,60);
  ctx.lineTo(111,60);
  ctx.lineTo(112,50);
  ctx.lineTo(100,47.5);
  ctx.lineTo(100,42.5);
  ctx.lineTo(112,40);
  ctx.lineTo(115,0);
  ctx.lineTo(118,40);
  ctx.lineTo(130,42.5);
  ctx.lineTo(130,47.5);
  ctx.lineTo(118,50);
  ctx.lineTo(119,60);
  ctx.lineTo(125,60);
  ctx.lineTo(125,65);
  ctx.lineTo(120,68);
  ctx.lineTo(122,120);
  ctx.closePath();
  ctx.fill();
  
  // radio antenna
  ctx.fillStyle   = 'rgb(0,0,0)';
  ctx.beginPath();
  ctx.rect(111, 20, 8, 2)
  ctx.rect(110, 24, 10, 2)
  ctx.rect(109, 28, 12, 2)
  ctx.rect(109, 32, 12, 2)
  ctx.closePath();
  ctx.fill();
}

function draw() {
  // var skyline = document.getElementById("skyline");
  
  // if (skyline.getContext) {
  //   var ctx = skyline.getContext('2d');
  // 
  //   drawSkyline(ctx);
  //   //drawCircles(ctx);
  //   //drawBubble(ctx);
  //   
  // }
}

$(document).ready(function(){
  draw();
});

