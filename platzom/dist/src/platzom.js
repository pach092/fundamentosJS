'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	// Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}

	// Si la palabra traducidad tienen 10 o ms letras, se debe partir a la mitad y unir con un guion medio
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	// Si la palabra original es un palindromo, ninguna palabra anterior cuenta y se devuelve la misma palabra
	// Intercambiando mayusculas y minusculas

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
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