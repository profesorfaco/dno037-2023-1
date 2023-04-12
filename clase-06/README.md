### Diseño y Nuevos Medios → Clase 06 → 12/04/2023

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Teoría

La [biblioteca de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos hoy será [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

Como ya sabemos, en las variables podemos almacenar valores numéricos. Estos valores pueden ser visualizados mediante gráficos de [línea](https://www.chartjs.org/docs/latest/charts/line.html), [barra](https://www.chartjs.org/docs/latest/charts/bar.html), [radar](https://www.chartjs.org/docs/latest/charts/radar.html), [torta](https://www.chartjs.org/docs/latest/charts/doughnut.html), [área polar](https://www.chartjs.org/docs/latest/charts/polar.html), [burbujas](https://www.chartjs.org/docs/latest/charts/bubble.html) y [dispersión](https://www.chartjs.org/docs/latest/charts/scatter.html), que son los tipos de gráficos disponibles en una de las bibliotecas de JavaScript recién mencionadas:

**[Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type) nos permite implementar tales gráficos desde su promesa de ser *Simple yet flexible JavaScript charting for designers & developers*. Al ubicarse con simpleza y flexibilidad entre dos extremos, podría llegar a incomodar a *designers* que quieran personalizar cada pequeño detalle y también a *developers* que necesitan visualizar una ingente cantidad de datos**. Lo que haremos será generar gráficos sencillos, complicándonos en la preparación de los datos por visualizar. 

Para poder usar la biblioteca de Charts.js corresponde reconocer sus partes: 

```
var contexto = document.getElementById('nombre');
var configuracion = {type: '…', data: {…}, options: {…}}
var chart = new Chart(contexto, configuracion);
```

1. Requiere la creación del contexto 
2. Requiere la configuración de tipo, datos y opciones para el gráfico 
3. Contexto y configuración permiten indicar que en este script vamos a crear un `new Chart()`.

Nos referimos a tres partes. No se trata de tres pasos de una secuencia en un único sentido; también sería válido escribir:

```
new Chart(document.getElementById('nombre'), {type: '…', data: {…}, options: {…}});
```

Ahora, si necesitamos datos, podemos volver a aprovechar aquellos que ya se ofrecen en línea. 

**Pero en esta ocasión no estamos trabajando con p5.js, sólo con la biblioteca de Charts.js v3, por ello no contamos con [la función loadJSON](https://p5js.org/es/reference/#/p5/loadJSON); ya nos corresponde avanzar al [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)**.

**Para aprender lo necesario respecto del uso de Fetch, es recomedable tomarse 47 minutos para ver tres videos de Daniel Shifmann**:

- https://youtu.be/tc8DU14qX6I
- https://youtu.be/RfMkdvN-23o
- https://youtu.be/uxf0--uiX0I

Una vez sean obtenidos los datos mediante el [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), podemos estructurarlos  a la manera que convenga al [tipo de gráfico](https://www.chartjs.org/docs/latest/charts/?h=type).

Podemos, por ejemplo, tomar datos de [un JSON](https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-06/datos.json) y luego organizarlos en función del gráfico, como se hace en el script-1.js en la carpeta de la clase de hoy: 

```
async function primero() {
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-06/datos.json");
    const data = await consulta.json();
    //Declaro variables que parten con un arreglo vacío
    let regiones = [];
    let hombres = [];
    let mujeres = [];
    //Reviso data y empujo un elemento a cada arreglo que estaba vacío
    data.forEach((x) => {
        regiones.push(x.region);
        hombres.push(x.hombres);
        mujeres.push(x.mujeres);
    });
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("regiones"), {···});
}
primero().catch((error) => console.error(error));
```

También podemos tomar los datos de [un GeoJSON](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson) y contarlos bajo ciertas condiciones, para luego visualizar los números que resulten del conteo, como se hace en el script-2.js en la carpeta de la clase de hoy:

```
async function segundo() {
    const consulta = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson");
    const data = await consulta.json();
    //Declaro variables que parten en cero
    let chileno = 0;
    let japones = 0;
    let otro = 0;
    //Reviso data con alguna condiciones
    data.features.forEach((t) => {
        if (t.properties.place.includes("Chile")) {
            chileno = chileno + 1;
        } else if (t.properties.place.includes("Japan")) {
            japones = japones + 1;
        } else {
            otro = otro + 1;
        }
    });
    //Creo una variable como un arreglo vacío
    var numeros = [];
    //Empujo a la variable los resultados del contador
    numeros.push(chileno, japones, otro);
    var nombres = ["En Chile", "En Japón", "En el resto del mundo"];
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("earthquakes").getContext("2d"), {···});
}
segundo().catch((error) => console.error(error));
```

**Hasta aquí hemos tomado datos desde un JSON (JavaScript Objecto Notation). En el primer ejemplo de código tomamos los números desde las mismas opciones de datos ofrecidos y en los otros ejemplos creamos números contando los datos ofrecidos**.

**Pero JSON no es la única forma de intercambiar datos. También podemos usar CSV (Comma Separated Values), que no es más que una tabla de datos muy simplificada.** 

Podemos poner lo que sigue en un *spreadsheet* de Excel o Google Docs.

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |
| Colombia  | 50880000         | 1142000        |
| España    | 47350000         | 505990         |

Luego podemos guardarlo o descargarlo como un CSV y obtener algo como lo que sigue:

```
País,Población,Superficie
Chile,18261884,756102
Colombia,50880000,1142000
España,47350000,505990
```

¡Lo que se obtiene es CSV!

Usando CSV, el Ministerio de Ciencia ofrece datos actualizados sobre el COVID-19 en Chile: https://github.com/MinCiencia/Datos-COVID19/blob/master/output/producto5/TotalesNacionales.csv

Allí sólo hay 22 filas, pero tantas columnas como días han pasado desde el 2 de marzo de 2020. Dicho de otro modo, tal CSV tiene sólo 22 líneas, pero más de mil comas por línea.

En un repositorio de GitHub un CSV (bien escrito) se muestra en tablas, pero en *raw* se ve así: https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv

El CSV en *raw* es el que tenemos que usar para hacer el `fetch()`. Así se muestra en el `script-3.js` preparado para la clase:

```
async function tercero() {
    const consulta = await fetch("https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    const fechas = filas[0].split(",").slice(1);
    const activos = filas[5].split(",").slice(1);
    //Ahora puedo armar el gráfico
    new Chart(document.querySelector("#covid").getContext("2d"), {···});
}
tercero().catch((error) => console.error(error));
```

Noten la diferencia en la línea que sigue al fetch, esa que traspasa `consulta` a `data`. Ese traspaso ya no se trata como `json()` sino un `txt()`. Ahora, como se trata de un TXT, tenemos que usar varias veces el [método split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split) para explicarle cómo tratar a ciertos caracteres.

Parte de lo recién presentado queda mejor explicado en [el segundo de los videos de Daniel Shiffman](https://youtu.be/RfMkdvN-23o?t=172) enlistados más arriba.

- - - - - - -

### Práctica

En el [index.html](https://profesorfaco.github.io/dno037-2023/clase-06/) se muestra el resultado de los scripts ya explorados (en teoría). 

Exploremos las consultas por partes, para poder hacer modificaciones respecto de lo que se muestra.

Como siempre, el ejercicio se completa cuando cada estudiante publica su resultado [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-07)
