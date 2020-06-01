var Total_mins;
var Total_segs;
var cronometro;
var tabla=new Array(3);
var jugador=0;
var gana=0;
var fin=false;

function SeleccionaCelda(x,y){
	if (jugador==1) {
		tabla[x][y]=1;
		ColorCelda(x,y,"blue");
		comprobar(x,y,jugador);
		jugador=2
	} else {
		tabla[x][y]=2;
		ColorCelda(x,y,"green");
		comprobar(x,y,jugador);
		jugador=1;
	}
	if (!fin){
		//alert("turno del jugador"+jugador);
	}

}
function RevisarCelda(x,y){
	if (tabla[x][y]==1 || tabla[x][y]==2) {
		alert("casilla ocupada");
	}	else if (fin){
		alert("se acabo la partida")
	}	else {
	SeleccionaCelda(x,y);
	}
}

function javaScript(){
	for (i = 0; i < 3; i++) {
		tabla[i]=new Array(3);
	}
	LimpiaReloj();
	IniciaReloj();

	//x=Math.round(Math.random() *2);
	//y=Math.round(Math.random() *2);
	SeleccionaCelda(x,y);
}
javaScript();


