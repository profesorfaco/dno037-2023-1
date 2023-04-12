### Diseño y Nuevos Medios → Clase 07 → 19/04/2023

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Teoría

La [biblioteca de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos hoy será [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

**[jQuery](https://jquery.com/) es una biblioteca que nos simplifica la redacción de instrucciones en JavaScript, sobre todo cuando se busca manipular el DOM y hacer transiciones animadas**. Su primera versión estable fue lanzada el año 2006, lo que es anterior a la primera revisión importante del [estándar de JavaScript](https://en.wikipedia.org/wiki/ECMAScript), la [ES5 del 2009](https://www.w3schools.com/js/js_es5.asp), con la que se comenzó a simplificar la redacción del mismo lenguaje.

Conviene partir con un ejemplo: En una página web tenemos varios elementos con una clase a la que denominamos "media". Para afectar a todos los elementos que tienen esa clase con un cambio de color desde JavaScript, sin usar bibliotecas, hace algunos años habríamos escrito la siguiente instrucción:

```
var elementos = Array.from(document.getElementsByClassName("media"));
elementos.forEach(function(elemento){
  elemento.style.color="red";
});
```

Pero con el [estándar de JavaScript actual](https://www.w3schools.com/js/js_versions.asp) se simplifica un poco:

```
var elementos = document.querySelectorAll(".media");
elementos.forEach(elemento => elemento.style.color="red");
```

Ahora bien, usando [jQuery](https://jquery.com/), basta con escribir:

```
$(".media").css("color","red");
```

Para la primera década del 2000, [jQuery](https://jquery.com/) ofrecía una simplificación radical en el trabajo con JavaScript. Pero en los años más recientes el mismo lenguaje ha tendido a simplificarse; no conviene perder de vista esta tendencia por prestarle mucha atención a la biblioteca, esto sería casi como olvidar el modo correcto de escribir algunas palabras por prestarle mucha atención a las abreviaciones de mensajería instantánea.

Hecha la advertencia, agreguemos un nivel más al ejemplo para poder entender el uso de la biblioteca: 

```
function enrojece() {
  $(".media").css("color","red");
}
$("#cambio").on("click", enrojece);
```

Tal instrucción está abreviando, mediante [jQuery](https://jquery.com/), lo siguiente:

```
function enrojece(){
  var elementos = document.querySelectorAll(".media");
  elementos.forEach(elemento => elemento.style.color="red");  
}
document.querySelector("#cambio").addEventListener("click", enrojece);
```

Con la última instrucción de jQuery, el cambio de color sobre todos los elementos de clase "media" se hace al presionar el botón de identidad "cambio". Y ya resulta evidente que la clave del uso de [jQuery](https://jquery.com/) está en la concatenación de un selector y una acción: `$(selector).action()`. 

Las opciones de selectores y acciones son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/

Hasta el año 2017 Internet Explorer no entendía a Fetch API (lo que revisamos la clase recién pasada). A mediados de 2020, Internet Archive eliminó la última versión de Internet Explorer de su lista de navegadores compatibles,y el jefe de seguridad de Microsoft, Chris Jackson, recomendaba no usarlo más. Entonces, el que no lo entendía ya  desapareció, pero corresponde recordar que el cuarto de hora de fama de jQuery es mucho anterior a 2017, por eso ofrece algo como un Fetch que exploraremos en [los documentos preparados para la práctica](https://profesorfaco.github.io/dno037-2023/clase-07/).

#### NOTA AL MARGEN

Ya avanzada la segunda década del 2000, cuando casi no se habla de sitios sino aplicaciones web, podría ser necesario exigir a las bibliotecas de JavaScript algo más que simplificarnos la tarea de manipular el DOM y hacer transiciones animadas. 

Tanto corresponde exigirles que, a veces, el concepto de biblioteca (*library*) queda chico, y se cambia por marco de trabajo (*framework*).

Hay 3 frameworks de JavaScript importantes en la actualidad:

- React → https://es.reactjs.org/

- Angular → https://angular.io/

- Vue.js → https://vuejs.org/

**Si fuera de su interés comenzar a explorar uno de estos *frameworks*, sería muy recomendable partir por acá: https://vuejs.org/tutorial/**

Es que Vue.js es un Framework de JavaScript progresivo. No debes transformar todo tu código fuente a su particular redacción. Al contrario, puedes mantenerte muy cerca de los estándares de los lenguajes de descripción y programación para Web que vamos aprendiendo, y desde ahí aprovechar, progresivamente, lo que tal framework ofrece.

- - - - - - -


### Práctica

La práctica estará enfocada en jQuery, por lo que conviene tener a la manos las opciones de selectores y acciones que son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/

Usaremos datos reales de movimientos telúricos registrados por la USGS: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php, porque existe la posibilidad de que tengamos información precisa sobre un temblor que pueda darse durante el horario de clase.

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2023/clase-07/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-08)
