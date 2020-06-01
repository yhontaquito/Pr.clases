function InicTablero(){
	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 2; j++) {
		 	tabla [i] [j]=0;
		 } 
	}
}

function ColorCelda(x,y,color){
	celda=document.getElementById('c'+x+y);
	celda.style.background=color;
}