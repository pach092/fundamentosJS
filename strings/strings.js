function platzom(str) {
	let translation = str;

	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// Si la palabra traducidad tienen 10 o ms letras, se debe partir a la mitad y unir con un guion medio
	const length = translation.length;
	if (length >= 10) {
		const firstHalf = translation.slice(0, Math.round(length / 2));
		const secondHalf = translation.slice(Math.round(length / 2));
		translation = `${firstHalf}-${secondHalf}`;
	}

	// Si la palabra original es un palindromo, ninguna palabra anterior cuenta y se devuelve la misma palabra
	// Intercambiando mayusculas y minusculas

	const reverse = (str) => str.split('').reverse().join('');

	function minMay(str) {
		const length = str.length;
		let translation = '';
		let capitalize = true;
		for (let i = 0; i < length; i++) {
			const char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}

console.log(platzom('Programar')); // Program
console.log(platzom('Zorro')); // Zorrope
console.log(platzom('Zarpar')); // Zarppe
console.log(platzom('abecedario')); // abece-dario
console.log(platzom('sometemos')); // SoMeTeMoS

