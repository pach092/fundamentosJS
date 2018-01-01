let vidaGoku = 100;
let vidaSuperman = 100;

const minPower = 5;
const maxPower = 12;

const ambosSiguenVivos = () => vidaGoku > 0 && vidaSuperman > 0;

const calcularGolpe = () => Math.round(Math.random() * (maxPower - minPower) + minPower);

const gokuSigueVivo = () => vidaGoku > 0;

let round = 0;

while (ambosSiguenVivos()) {
	round++;
	console.log(`Round ${round}`);

	const golpeGoku = calcularGolpe();
	const golpeSuperman = calcularGolpe();

	if(golpeGoku>golpeSuperman){
		// ataca Goku
		console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
		vidaSuperman -= golpeGoku;
		console.log(`Superman queda con ${vidaSuperman} puntos de vida`);
	}else {
		// ataca Superman
		console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
		vidaGoku -= golpeSuperman;
		console.log(`Goku queda con ${vidaGoku} puntos de vida`);
	}
}

if(gokuSigueVivo()){
	console.log(`Goku gano la pelea. Su vida es de ${vidaGoku}`);
}else{
	console.log(`Superman gano la pelea. Su vida es de ${vidaSuperman}`);
}