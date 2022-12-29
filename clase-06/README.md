### Diseño y Nuevos Medios → Clase 06 → 12/04/2023

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Teoría

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- - - - - - - - 

Como ya sabemos, en las variables podemos almacenar valores numéricos. Estos valores pueden ser visualizados mediante gráficos de [línea](https://www.chartjs.org/docs/latest/charts/line.html), [barra](https://www.chartjs.org/docs/latest/charts/bar.html), [radar](https://www.chartjs.org/docs/latest/charts/radar.html), [torta](https://www.chartjs.org/docs/latest/charts/doughnut.html), [área polar](https://www.chartjs.org/docs/latest/charts/polar.html), [burbujas](https://www.chartjs.org/docs/latest/charts/bubble.html) y [dispersión](https://www.chartjs.org/docs/latest/charts/scatter.html), que son los tipos de gráficos disponibles en una de las bibliotecas de JavaScript recién mencionadas:

**[Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type) nos permite implementar tales gráficos desde su promesa, en inglés de ser *Simple yet flexible JavaScript charting for designers & developers*. Al ubicarse en ese lugar intermedio puede provocar dolores de cabeza en los extremos caricaturizados: muy complejo para *designers* o muy simple para *developers*.** 

Para poder usarlo corresponde reconocer sus partes: 

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

**Pero en esta ocasión no estamos trabajando con p5.js, sólo con la biblioteca de Charts.js, por ello no contamos con [la función loadJSON](https://p5js.org/es/reference/#/p5/loadJSON); ya nos corresponde avanzar al [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)**.

**Para aprender lo necesario respecto del uso de Fetch, es recomedable tomarse 47 minutos para ver tres videos de Daniel Shifmann**:

- https://youtu.be/tc8DU14qX6I
- https://youtu.be/RfMkdvN-23o
- https://youtu.be/uxf0--uiX0I

Una vez sean obtenidos los datos mediante el [uso de Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), podemos estructurarlos  a la manera que convenga al tipo de gráfico que estemos usando en [Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type).

Podemos, por ejemplo, tomar datos de un JSON y luego organizarlos para definir lo que corresponda a cada eje en un gráfico de barras, como se hace en el el script-1.js en la carpeta de la clase de hoy: 


```
async function todo() {
    const consulta = await fetch("https://swapi.dev/api/people/?page=1&format=json");
    const data = await consulta.json();
    let nombres = [];
    let estaturas = [];
    data.results.forEach((s) => {
        nombres.push(s.name);
        estaturas.push(s.height);
    });

    new Chart(document.getElementById("starwars"), {
        type: "bar",
        data: {
            labels: nombres,
            datasets: [
                {
                    label: "StarWars",
                    data: estaturas,
                    backgroundColor: "#78909c",
                },
            ],
        }
    });
}
todo().catch((error) => console.error(error));
```

También podemos tomar los datos de un JSON y contarlos bajo ciertas condiciones, para luego visualizar los números que resulten del conteo. Por ejemplo, puedo tomar la información de todos los movimientos telúricos 4.5+ registrados e [informados por la USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) durante los últimos 7 días. En [el JSON de la USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson) no encontramos el detalle de cuántos movimientos telúricos 4.5+ han ocurrido en Chile o Japón, pero podemos encargarle al computador revisar si en cada registro el nombre del lugar incluye `Chile` o `Japan`. 

Eso es lo que se hace en el `script-2.js`:

```
async function todo() {
    const consulta = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson");
    const data = await consulta.json();
    //Declaro variables que parten en cero;
    let chileno = 0;
    let japones = 0;
    let otro = 0;
    //Con un forEach reviso todo el contenido con algunas condiciones
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
    //Los colores los tomé de https://color.adobe.com/es/create/image
    var colores = ["#1c313a", "#455a64", "#718792"];
    //Ahora puedo armar el gráfico
    new Chart(document.getElementById("earthquakes").getContext("2d"), {
        type: "doughnut",
        data: {
            labels: nombres,
            datasets: [{ label: "Earthquakes", data: numeros, backgroundColor: colores }],
        },
    });
}
todo().catch((error) => console.error(error));
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

Allí sólo hay 22 filas, pero tantas columnas como días han pasado desde el 2 de marzo de 2020. Dicho de otro modo, tal CSV tiene sólo 22 líneas, pero más de 760 comas por línea.

En un repositorio de GitHub un CSV bien escrito se muestra en tablas, pero en *raw* se ve así: https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv

El CSV en *raw* es el que tenemos que usar para hacer el `fetch()`. Así se muestra en el script-3.js:

```
async function visualizacion() {
    const consulta = await fetch("https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    const fechas = filas[0].split(",").slice(1);
    const activos = filas[5].split(",").slice(1);
    new Chart(document.querySelector("#covid").getContext("2d"), {
        type: "bar",
        data: {
            labels: fechas,
            datasets: [{ data: activos, backgroundColor: "#455a64" }],
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (numero) {
                            return numero.toLocaleString("es-CL");
                        },
                    },
                },
            },
            plugins: {
                legend: { display: false },
                title: { display: true, text: "CASOS ACTIVOS DE COVID-19 EN CHILE" },
            },
        },
    });
}
visualizacion().catch((error) => console.error(error));
```

Noten la diferencia en la línea que sigue al fetch, esa que traspasa `consulta` a `data`. Ese traspaso ya no se trata como `json()` sino un `txt()`. Ahora, como se trata de un TXT, tenemos que usar varias veces el [método split()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split) para explicarle cómo tratar a ciertos caracteres.

Parte de lo recién presentado queda mejor explicado en [el segundo de los videos de Daniel Shiffman](https://youtu.be/RfMkdvN-23o?t=172) enlistados más arriba.

Para mencionar una alternativa a fetch de un CSV, podría aprovecharse la biblioteca [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*.

- - - - - - -

### Práctica

En el index.html de la carpeta hay un cuarto script sin explicación, que exploraremos de manera práctica. Los demás scripts ya explorados (en teoría), tendrán que se modificados para datos distintos con los que construir las visualizaciones.

Como siempre, el ejercicio se completa cuando cada estudiante publica su resultado [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-07)
