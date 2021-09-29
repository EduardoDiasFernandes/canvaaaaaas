var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d'); //linha horizontal de cima
function Desenha(){
	if(canvas.getContext){  //linha cinza
		ctx.beginPath(); 
		ctx.moveTo(50,50); 
		ctx.lineTo(100,50); 
		ctx.strokeStyle = "black"; 
		ctx.fill
		ctx.stroke(); 

		ctx.beginPath(); 
		ctx.moveTo(50,100); 
		ctx.lineTo(100,100); 
		ctx.strokeStyle = "black"; 
		ctx.stroke(); 
		

		ctx.beginPath(); 
		ctx.moveTo(100,50); 
		ctx.lineTo(100,100); 
		ctx.strokeStyle = "black"; 
		ctx.stroke(); 
				
		addEventListener("keydown", 
			function PressKey()
			{
				var key = event.keyCode; //linha vermelha
				if (key == 32){ //tecla de espaço
					ctx.beginPath(); 
					ctx.moveTo(50,50);
					ctx.lineTo(50,100); 
					ctx.strokeStyle = "red"; 
					ctx.stroke(); 	
				}
			}	
		)
	}
	
	ctx.arc( 150, 50, 30, 0, 2*Math.PI);
			var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"blue");
    ctx.fillStyle = grd;
    ctx.fill();
	ctx.stroke();
	
	
}
window.onload = function() {          //imagem
            var img = new Image();
            img.src = 'op1.jpg';
            img.onload = function (e)
            {
                ctx.drawImage(img, 100, 100);
            }
			ctx.font = "13px Arial";
			ctx.fillText("aperte espaco para aparecer a linha vermelha", 10, 10);
}
Desenha();