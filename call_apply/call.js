const pacho = {
	nombre: 'Pacho',
	apellido: 'Bernal'
};

function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`;
	str = uppercase ? str.toUpperCase() : str;
	for (let i = 0; i < veces; i++) {
		console.log(str);
	}
}

saludar.call(pacho, 3, true);

const params = [3, true];
saludar.call(pacho, ...params);