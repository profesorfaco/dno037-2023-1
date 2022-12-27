### Diseño y Nuevos Medios → Clase 05 → 05/04/2023

# HTML5 + CSS3 + otras bibliotecas de JS

### Teoría

Existen [muchas bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries), además de [p5.js](https://p5js.org/es/). 

Antes de explorar algunas de ellas, nos conviene tener completa claridad respecto de los tipos de datos con los que JavaScript y sus respectivas bibliotecas pueden operar.

Para comenzar a clarificar las cosas, partamos con el número 18261884. 

Si nos entregan tal número, sin contexto alguno, resultaría inútil. Pero es distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Entendiendo cómo funciona una tabla, contamos con una clara orientación para la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con su superficie. Si dividimos el primer dato numérico por el segundo, obtenemos la densidad de la población en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde apuntar:

- **18261884** es un número entero, un `int` (del inglés *integer*).

- **24,15267252** es un número de coma flotante, un `float` (del inglés *floating point number*; y no se olviden de esta diferencia, lo que para nosotros es coma, *for them* es punto, y el *coding* se hace en *english*).

A estos dos tipos de datos, podemos agregar: 

- **true** o **false** como las dos opciones posibles de un [tipo de dato lógico](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico) (bool: *boolean*)

- **"A"** como un carácter (char: *character*)

- **"ALGUNAS PALABRAS"** como una cadena de caracteres (en inglés: *string*)

¡En el tipo de dato numérico y booleano no se usan comillas, pero cuando se tienen caracteres aislados o en cadena, sí!

Mencionamos `int`, `float`, `bool`, `char` y `string`, porque son palabras que en lenguajes de programación más clásicos se reservan para **declarar que tal variable almacenará tal tipo de dato. Pero en JavaScript podemos crear toda variables con una única palabra reservada,`var`**. También podemos usar `let` y `const`. Para entender la diferencia, nos conviene consultar el artículo [Var, let y const. ¿Donde, cuando y por qué?](https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b).

Usando únicamente `var`, en JavaScript podemos asignar como contenido de la variable todas las siguientes alternativas:

```
var a = 18261884;
var b = 24.15267252;
var c = true;
var d = "Lisa the Vegetarian";
var e = ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"];
var f = {
    mom: "Luann Van Houten",
    dad: "Kirk Van Houten",
    child: "Milhouse Van Houten"
};
var g = {
    mom: "Marge Simpson",
    dad: "Homer Simpson",
    children: ["Bart Simpson", "Lisa Simpson", "Maggie Simpson"]
};
var h = [
    {
        mom: "Luann",
        dad: "Kirk",
        children: ["Milhouse"]
    },
    {
        mom: "Marge",
        dad: "Homer",
        children: ["Bart", "Lisa", "Maggie"]
    },
    {
        mom: "Manjula",
        dad: "Apu",
        children: ["Poonam", "Sashi", "Pria", "Uma", "Anoop", "Sandeep", "Nabendu", "Gheet"]
    }
];
```
**Lo que cambia viene después del signo igual `=`, que en este caso está asignando contenido a cada variable.** 

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) sí usa comillas. 

La variable `e`, que contiene un arreglo, usa paréntesis cuadrado y cada elemento, por tratarse de un *string*, usa comillas (si fuesen números o booleanos no las usarían). 

La variable `f`, que contiene un objeto, usa paréntesis de llave que en su interior contiene pares de `nombre:valor`. 

Las variables `g` y `h` son mezclas de las anteriores.

Las variables `f`, `g` y `h` pueden verse como algo que ya hemos usado: **JSON** (JavaScript Object Notation; Notación de Objetos de JavaScript), un formato ligero de intercambio de datos.

Para cerrar, recordemos que existen servicios que ofrecen datos en línea. Mucho más útiles que los datos de personajes de [StarWars](https://swapi.dev/api/people/?format=json), pueden ser los datos sobre:

- tiempo atmosférico: https://openweathermap.org/current#current_JSON
- indicadores económicos diarios en Chile: https://mindicador.cl/api
- movimientos telúricos: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
- etcétera: https://github.com/juanbrujo/listado-apis-publicas-en-chile

Como recordarán: En la [clase-03](https://github.com/profesorfaco/dno037-2023/tree/main/clase-03) vimos que era posible hacer pruebas con el [editor de p5.js](https://editor.p5js.org/profesorfaco/sketches/611nBVIY2). Pueden repetir esas pruebas para revisar estructura y posibles consultas a los servicios recién referidos.

- - - - - - - - - 

### Práctica

Para hacer su versión de [esta Web App ya preparada](https://profesorfaco.github.io/dno037-2023/clase-05), es necesario:

- crear un usuario en [OpenWeather](https://home.openweathermap.org/users/sign_in) y activar su propia API Key.

- descargar lo contenido en [la carpeta de esta clase y personalizarlo](https://profesorfaco.github.io/dno037-2023/clase-05).

Personalizarlo implicar decidir tres ciudades distintas y trabajar, en conjunto, en la creación de algunas alternativas de [Weather icons](https://openweathermap.org/weather-conditions) con imágenes en formato [SVG](https://developer.mozilla.org/es/docs/Web/SVG/Tutorial/Introduction) como las de https://icons8.com/icon/pack/weather/dusk

Recuerden que el ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado con aporte destacado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-04) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-06)
