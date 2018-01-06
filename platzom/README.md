# Platzom

Platzi es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://www.platzi.com/js) de [Platzi](https://www.platzi.com).

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guion medio
- Por ultimo, si la palabra origina es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas

## Instalacion

```
npm install platzom
```

## Uso

```
import platzon from 'platzom'
platzom("Programar") //Program
platzom("Zorro") //Zorrope
platzom("Zarpar") //Zarppe
platzom("abecedario") //abece-dario
platzom("sometemos") //SoMeTeMoS
```

## Creditos
- [Sacha Lifszyc](https://www.twitter.com/slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)