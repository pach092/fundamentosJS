const prefijo = prefijo => {
	return function makePrefixer(palabra){
		console.log(`${prefijo}${palabra}`);
	};
};

const prefijoRe = prefijo('re');
const prefijoIn = prefijo('in');

prefijoRe('bueno');
prefijoIn('creible');