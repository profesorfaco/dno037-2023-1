### Diseño y Nuevos Medios → Clase 03 → 22/03/2023

# HTML5 + CSS3 + p5.js

### Teoría (para la casa)

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


En la [clase recién pasada](https://github.com/profesorfaco/dno037-2023/tree/main/clase-02) aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), para obtener [datos de un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-02/regiones.json) que tenía la siguiente estructura:

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

Si analizamos este [JSON](https://www.json.org/json-es.html) como notación de JavaScript (razón de su nombre, iniciales de JavaScript Object Notation), notaremos que todo es contenido por un paréntesis cuadrado, por lo que se trata de un arreglo. Los elementos de este arreglo, que están separados por comas, son contenidos por paréntesis de llave, por lo que cada uno de los 16 elementos en este arreglo es un objeto. En cada objeto vemos tres pares, con un tercero que contiene su arreglo para desplegar más información (que, por espacio, aquí se omite).

Tal estructura del JSON implica una forma de consultarlo. Si fuera otra la estructura, otra sería la forma de consultarlo:

- Si quiero un dato de un arreglo: Lo llamo por su ubicación numerada, que parte en 0.

- Si quiere un dato de un objeto: Lo llamo por su nombre. 

- Si quiero un dato que está dentro de un arreglo que está dentro de un objeto que, a su vez, está dentro de un arreglo: Lo llamo por su posición después de su nombre y después de su posición.

¡Al principio parece engorroso! Pero así es todo la primera vez que lo enfrentamos.

Lo que pasa es que pronto se nos olvidan los primeros enfrentamientos con lo que supusimos engorroso: Con la práctica, la complejidad de cualquier cosa se *in-corpora* hasta no complicarnos más:

> I distinguish between *complexity* and *complicated*. I use the world "complexity" to describe the state of the world. The word "complicated" describes a state of mind. —Donald A. Norman

- - - - - - - - - - - - -

### Práctica (para la clase)

Para retomar la práctica, aprovechemos algunos [emojis](https://www.w3schools.com/charsets/ref_emoji_smileys.asp) y el [editor de p5.js](https://editor.p5js.org/).

**Partamos con una variable que contiene un `[arreglo]` con varios `"strings"` separados por comas**

Paso 0 → https://editor.p5js.org/profesorfaco/sketches/FQ5afw5qs

Paso 1 → https://editor.p5js.org/profesorfaco/sketches/0rbqSy5Yl

Paso 2 → con un [`for`](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaraci%C3%B3n_for) → https://editor.p5js.org/profesorfaco/sketches/hN4MraRVZ

Paso 3 → con un [`forEach`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) → https://editor.p5js.org/profesorfaco/sketches/iltVqbz1k

**Pasemos a una variable que contiene un `[arreglo]` con varios `{objetos}` separados por comas**

Paso 4 → con un [`for`](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaraci%C3%B3n_for) → https://editor.p5js.org/profesorfaco/sketches/G_EoarCNi

Paso 5 → con un [`for`](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration#declaraci%C3%B3n_for) y un pequeño ajuste → https://editor.p5js.org/profesorfaco/sketches/Y4-FySKyR

Paso 6 → con un [`forEach`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) → https://editor.p5js.org/profesorfaco/sketches/1nUZgvwaX

Paso 7 → con un [`forEach`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) y algo más de información en el arreglo que contiene objetos → https://editor.p5js.org/profesorfaco/sketches/kcWNc54mU

Paso 8 → con un [`forEach`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), algo más de información en el arreglo que contiene objetos y un [`if…else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else) → https://editor.p5js.org/profesorfaco/sketches/4XOEay_7q

**Ahora pasemos a una variable que contiene lo que ofrecer un JSON en línea**

Paso 9 → El JSON en línea → https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-03/ejemplo.json

Paso 10 → Vuelta al Editor de P5.js → https://editor.p5js.org/profesorfaco/sketches/8ST5JaJA3

En casi todos los pasos (exceptuando el 9) tenemos a la vista el [Web Editor de p5.js](https://editor.p5js.org/), que "esconde a la izquierda", en una sección desplegable, 3 documentos: `index.html`, `style.css` y `script.js`. Cada extensión nos informa sobre el lenguaje en uso.

En el mismo [Web Editor de p5.js](https://editor.p5js.org/), podemos hacer una prueba con el JSON de las regiones del país usado en el ejemplo de la [clase recién pasada](https://github.com/profesorfaco/dno037-2023/tree/main/clase-02) y mencionado más arriba → https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-02/regiones.json

En el `sketch.js` que nos muestra [Web Editor de p5.js](https://editor.p5js.org/) vamos a reemplazar lo que ofrece por lo siguiente:

```
var datos;
var datosArreglados;
function preload() {
  datos = loadJSON(
    "https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-02/regiones.json"
  );
}
function setup() {
  noCanvas();
  console.log(datos);
  datosArreglados = Object.values(datos);
  console.log(datosArreglados);
}
```

Al "darle play" al sketch, algo se imprime en la consola. 

Ahora intenta resolver, con tal base y lo recién revisado, la frase 

> ¿Sabía usted que la región [nombre aleatorio] tiene [número correspondiente] provincias?

Si lo puedes resolver, sube un nivel: Después de la pregunta, agrega "Tales provincias son:", seguido de un despliegue de cada nombre de provincia en [una lista ordenada con numeración](https://developer.mozilla.org/es/docs/Web/HTML/Element/ol) --- acá lo resolví: https://editor.p5js.org/profesorfaco/sketches/aC_LKgNk7

Y si buscas un desafío más: Agrega un botón que al ser presionado sume más de las mismas frases, pero de manera ordenada (una región tras otra, partiendo en Arica y Parinacota).

Después de tales desafíos, pasemos a revisar [el código que está preparado en esta carpeta](https://profesorfaco.github.io/dno037-2023/clase-03/), que fue modificado hace un par de días: Por la demora de la repuesta de https://aves.ninjas.cl/api/birds, en lugar de ir por datos de aves chilenas, vamos a ir por datos de los digimon https://digimon-api.vercel.app/api/digimon

Conviene:

- tener a mano la [página de referencias de **p5.js**](https://p5js.org/es/reference/);

- contar con una extensión que permita ver JSON de manera más ordenada en su navegador web. Para Chrome: [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/mhimpmpmffogbmmkmajibklelopddmjf?hl=es) o [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=es). Para Firefox: [JSON Lite](https://addons.mozilla.org/es/firefox/addon/json-lite/) o [Basic JSON Formatter](https://addons.mozilla.org/es/firefox/addon/basic-json-formatter/);

- copiar, en una carpeta de su computador, los documentos que se ofrecen en esta carpeta de repositorio

- cuando la carpeta esté bien ordenada y en lugar accesible en su computador, la abriremos con https://phcode.dev/

En esta clase, además de subir el trabajo al repositorio, habría que subir algunos dibujos al README.md de tu repositorio. Si resuelven eso hoy, sabrán como resolver parte de la [prueba de la próxima clase](https://github.com/profesorfaco/dno037-2023/tree/main/clase-04).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-02) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-04)

