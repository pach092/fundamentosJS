const nacimiento = new Date(1992, 0, 4);
const hoy = new Date();

const tiempo = hoy - nacimiento;
console.log(tiempo);

const tiempoSegundos = tiempo / 1000;
console.log(tiempoSegundos);

const tiempoMin = tiempoSegundos / 60;
console.log(tiempoMin);

const tiempoHoras = tiempoMin / 60;
console.log(tiempoHoras);

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
console.log(proximoCumple);

const diasSemana = [
	'Domingo',
	'Lunes',
	'Martes',
	'Miercoles',
	'Jueves',
	'Viernes',
	'Sabado'
];
console.log(diasSemana[proximoCumple.getDay()]);