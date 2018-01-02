function suma(...numeros) {
	return numeros.reduce(function (acum, numero) {
		acum += numero;
		return acum;
	}, 0);
}

const dobles = (...numeros) => numeros.map(numero => numero * 2);

const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0);

pares(3, 50 , 10);

dobles(3, 5, 10);

suma(4, 8, 12, 8954, 7, 9);