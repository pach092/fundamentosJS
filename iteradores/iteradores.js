function fibonacci() {
	let a = 0, b = 1;
	return {
		next: function (reset) {
			if (reset) a = 0, b = 1;
			let f = a;
			a = b;
			b += f;
			return { value: f, done: false};
		}
	};
}

const fibo = fibonacci();
fibo.next().value;