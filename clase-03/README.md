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


En la clase pasada aprovechamos [`loadJSON()`](https://p5js.org/es/reference/#/p5/loadJSON), para obtener [datos de un JSON](https://swapi.dev/api/people/?format=json) que tenía la siguiente estructura:

```
{
"count": 82,
"next": "https://swapi.dev/api/people/?page=2&format=json",
"previous": null,
"results": […] //10 items
}
```

Dentro de `results` tenemos un arreglo que contiene 10 ítems. Cada ítem tiene la siguiente estructura:

```
{
"name": "Luke Skywalker",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",
"homeworld": "https://swapi.dev/api/planets/1/",
"films": […],
"species": […],
"vehicles": […],
"starships": […],
"created": "2014-12-09T13:50:51.644000Z",
"edited": "2014-12-20T21:17:56.891000Z",
"url": "https://swapi.dev/api/people/1/"
}
``` 

Si necesito exclusivamente los `name` dentro de cada uno de los 10 items podría aprovechar dos métodos de JavaScript: 

- El método [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) que ejecuta la función indicada una vez por cada elemento del array.

- El método [`push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push) que añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

Con tales métodos, y lo que ofrece la biblioteca de p5.js, podemos escribir la siguiente instrucción:

```
var starWars;

function preload() {
    starWars = loadJSON("https://swapi.dev/api/people/?format=json");
}

function setup() {
    var lasOpciones = [];
    starWars.results.forEach((personaje) => lasOpciones.push(personaje.name));
    console.log(lasOpciones);
    noCanvas();
}
```

Puedo copiar y pegar la instrucción completa en https://editor.p5js.org/

En tal instrucción creo una variable global, de nombre `starWars`. Dentro del `preload()` puedo guardar en tal variable la información que está en línea gracias a [un JSON](https://swapi.dev/api/people/?format=json). Ahora, dentro del `setup()` puedo crear la variable de `lasOpciones` como un arreglo vacío. Luego, tomo la variable `starWars` y dentro de cada ítem dentro de `results` tomo el `name`, para sumarlo al arreglo que antes estaba vacío. Así se obtienen `lasOpciones`:

```
['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa', 'Owen Lars', 'Beru Whitesun lars', 'R5-D4', 'Biggs Darklighter', 'Obi-Wan Kenobi']
```

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

