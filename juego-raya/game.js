function comprobar(x,y,jugador) {
	if (tabla[0][0]==jugador && tabla[0] [1] ==jugador && tabla[0] [2]==jugador) {
		gana=jugador;
	}
	if (tabla[1][0]==jugador && tabla[1] [1] ==jugador && tabla[1] [2]==jugador) {
		gana=jugador;
	}
	if (tabla[2][0]==jugador && tabla[2] [1] ==jugador && tabla[2] [2]==jugador) {
		gana=jugador;
	}
	if (tabla[0][0]==jugador && tabla[1] [0] ==jugador && tabla[2] [0]==jugador) {
		gana=jugador;
	}
	if (tabla[0][1]==jugador && tabla[1] [1] ==jugador && tabla[2] [1]==jugador) {
		gana=jugador;
	}
	if (tabla[0][2]==jugador && tabla[1] [2] ==jugador && tabla[2] [2]==jugador) {
		gana=jugador;
	}
	if (tabla[0][1]==jugador && tabla[1] [1] ==jugador && tabla[2] [2]==jugador) {
		gana=jugador;
	}
	if (tabla[0][2]==jugador && tabla[1] [1] ==jugador && tabla[2] [0]==jugador) {
		gana=jugador;
	}
	if (gana==1) {
		fin=true;
	} else if (gana==2) {
		fin=true;
	}
} 