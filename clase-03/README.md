### Diseño y Nuevos Medios → Clase 03 → 22/03/2023

# HTML5 + CSS3 + p5.js

### Teoría

Para comenzar a comprender JavaScript, aprovechamos [p5.js](https://p5js.org/es/): una biblioteca de JavaScript que es una reinterpretación de [Processing](https://processing.org/) para la web. Por tal reinterpretación, lo más común es que tenemos dos funciones, una que se ejecuta una única vez y otra que se ejecuta una y otra vez. 

```
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

A estas funciones podemos agregarle una función previa:

```
function preload(){
  //cargas algo antes que se ejecute cualquier cosa
}
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

En [las referencias de p5.js](https://p5js.org/es/reference/#/p5/preload), esta función se describe así:

> La función `preload()` es ejecutada antes de `setup()`, es usada para manejar la carga asíncrona de archivos externos. Si se define una función `preload()`, `setup()` esperará hasta que las llamadas a funciones load hayan terminado. Solo se deben incluir instrucciones de carga dentro de `preload()` (`loadImage`, `loadJSON`, `loadFont`, `loadStrings`, etc).


En la clase pasada aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), para obtener [datos de un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-02/regiones.json) que tenía la siguiente estructura:

```
[
  {
    "region": "de Arica y Parinacota",
    "region_iso_3166_2": "CL-AP",
    "provincias": [···]
  },
  {
    "region": "de Tarapacá",
    "region_iso_3166_2": "CL-TA",
    "provincias": [···]
  },
  {
    "region": "de Antofagasta",
    "region_iso_3166_2": "CL-AN",
    "provincias": [···]
  },
  {
    "region": "de Atacama",
    "region_iso_3166_2": "CL-AT",
    "provincias": [···]
  },
  {
    "region": "de Coquimbo",
    "region_iso_3166_2": "CL-CO",
    "provincias": [···]
  },
  {
    "region": "de Valparaíso",
    "region_iso_3166_2": "CL-VS",
    "provincias": [···]
  },
  {
    "region": "del Libertador Gral. Bernardo O'Higgins",
    "region_iso_3166_2": "CL-LI",
    "provincias": [···]
  },
  {
    "region": "del Maule",
    "region_iso_3166_2": "CL-ML",
    "provincias": [···]
  },
  {
    "region": "de Ñuble",
    "region_iso_3166_2": "CL-NB",
    "provincias": [···]
  },
  {
    "region": "del Biobío",
    "region_iso_3166_2": "CL-BI",
    "provincias": [···]
  },
  {
    "region": "de la Araucanía",
    "region_iso_3166_2": "CL-AR",
    "provincias": [···]
  },
  {
    "region": "de los Lagos",
    "region_iso_3166_2": "CL-LL",
    "provincias": [···]
  },
  {
    "region": "de Aisén del Gral. Carlos Ibañez del Campo",
    "region_iso_3166_2": "CL-AI",
    "provincias": [···]
  },
  {
    "region": "de Magallanes y de la Antártica Chilena",
    "region_iso_3166_2": "CL-MA",
    "provincias": [···]
  },
  {
    "region": "Metropolitana de Santiago",
    "region_iso_3166_2": "CL-RM",
    "provincias": [···]
      }
    ]
  }
]
```

Si analizamos este JSON como notación de JavaScript (razón de su nombre, iniciales de JavaScript Object Notation), tenemos que todo es contenido por un paréntesis cuadrado, por lo que se trata de un arreglo. Los elementos de este arreglo, que están separados por coma, son contenidos por paréntesis de llave, por lo que cada uno de los 16 elementos en este arreglo es un objeto. En cada objeto vemos tres pares, con un tercero que contiene su arreglo para desplegar más información (que, por espacio, aquí se omite).

Tal estructura del JSON implica una forma de consultarlo. Si fuera otra la estructura, otra sería la forma de consultarlo:

- Si quiero un dato de un arreglo: Lo llamo por su ubicación numerada, que parte en 0.

- Si quiere un dato de un objeto: Lo llamo por su nombre. 

- Si quiero un dato que está dentro de un arreglo que está dentro de un objeto que, a su vez, está dentro de un arreglo: Lo llamo por su posición después de su nombre y después de su posición.

¡Al principio parece engorroso! Pero así es todo la primera vez que lo enfrentamos: Lo que pasa es pronto se nos olvidan los primeros enfrentamientos con lo engorroso para ir por otros: Difícil es recordar lo engorroso de los trazos de las vocales y consontantes de nuestro nombre de pila que hace mucho tiempo aprendimos a escribir. Con la práctica, la complejidad de cualquier cosa se incorpora hasta no complicarnos más. 

Por eso hoy volvemos a hacer una consulta a un JSON para completar una "App de dibujo".


- - - - - - - - - - - - -

### Práctica

Aprovechemos algún JSON distinto del ya trabajo. Podrían ser los disponibles en:

- https://digimon-api.vercel.app/api/digimon
- https://hp-api.herokuapp.com/api/characters/staff
- https://pokeapi.co/api/v2/pokemon/

¡Pero tengan cuidado con la estructura de cada uno! La estructura del json en la pokeapi es como la de swapi, pero la estructura de digimon es como la de hp, donde podría ser necesaria un ajuste por [lo que siempre devuelve loadJSON](https://github.com/processing/p5.js/issues/2154#issuecomment-578892245).

Tan pronto funcione el ajuste, podemos sumar un desafío para Harry Potter y Digimon: **Hacer un arreglo con opciones de un tipo de terminado**. Ej. Humanos vivos en Harry Potter o un mismo nivel en Digimon. Este desafío implica el uso de un `if` en el `forEach`:

- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else
- https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Una vez hechas las pruebas, es posible cambiar la instrucción del dibujo [preparada en este sitio web](https://profesorfaco.github.io/dno037-2023/clase-03) por alguna que muestre una imagen de un Digimon por dibujar (como referencia para el dibujo).

Y sube algunos dibujos al README.md de tu repositorio. Si lo haces hoy, sabrás como resolver parte de la [prueba de la próxima clase](https://github.com/profesorfaco/dno037-2023/tree/main/clase-04).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-02) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-04)

