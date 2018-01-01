let radious = 7;
const pi = Math.PI;

let circleArea = (radious, pi) => pi * (Math.pow(radious, 2));

console.log(`El area de un circulo de radio ${radious} es: ${circleArea(radious, pi)}`);