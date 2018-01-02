const saludarFamilia = apellido => {
	return function saludarMiembroDeFamilia(nombre) {
		console.log(`Hola ${nombre} ${apellido}`);
	};
};

const saludarGomez = saludarFamilia('Gomez');
const saludarPerez = saludarFamilia('Perez');
const saludarRomero = saludarFamilia('Romero');

saludarGomez('Pedro');
saludarGomez('Juan');
saludarGomez('Laura');

saludarPerez('Monica');
saludarPerez('Dario');
saludarPerez('Martin');

saludarRomero('Jorge');
