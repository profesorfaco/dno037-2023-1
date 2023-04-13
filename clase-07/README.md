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

Para la primera década del 2000, [jQuery](https://jquery.com/) ofrecía una simplificación radical en el trabajo con JavaScript. Pero en los años más recientes el mismo lenguaje ha tendido a simplificarse o hacerse más moderno, como veremos líneas más abajo: ¡No conviene perder de vista esta tendencia por prestarle mucha atención a la biblioteca!

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

Con la última instrucción de jQuery, el cambio de color sobre todos los elementos de clase "media" se hace al presionar el botón de identidad "cambio". **Y ya resulta evidente que la clave del uso de [jQuery](https://jquery.com/) está en la concatenación de un selector y una acción: `$(selector).action()`** 

**Las opciones de selectores y acciones puede encontrarse en este *torpedo*: https://htmlcheatsheet.com/jquery/**

Tales selectores y acciones podrían verse tan breves como algunos métodos de JavaScript moderno; no es descabellado pensar que jQuery, que por años ha sido [la biblioteca de JavaScript más popular](https://kinsta.com/blog/javascript-libraries/#the-most-popular-javascript-libraries), haya inspirado más de alguna modificación reciente en JavaScript (en el lenguaje a secas):

> A partir del año 2015, se marcó un antes y un después en el mundo de Javascript, estableciendo una serie de cambios que lo transformarían en un lenguaje moderno ([Versiones de ECMAScript](https://lenguajejs.com/javascript/introduccion/ecmascript/#versiones-de-ecmascript))

Las versiones más recientes de este lenguaje modernizado son comprendidas por la mayoría de los navegadores. Pero no por todos los navegadores que siguen siendo usados. Por ejemplo: Hasta el año 2017 Internet Explorer no entendía a la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API) (lo que revisamos la clase recién pasada), pero ya desde el año 2020 el jefe de seguridad de Microsoft, Chris Jackson, ha recomendado no usarlo más y cambiarse a Edge (otro navegador de Microsoft, que [ya pudo superar a Firefox, pero está lejos de alcanzar a Chrome](https://gs.statcounter.com/browser-market-share)).

Y con el ejemplo del párrafo anterior podríamos encontrarle sentido a seguir usando jQuery: Podría haber personas usando Internet Explorer en un computador que no se ha actualizado por años. En tal caso sería preferible usar un [`jQuery.getJSON()`](https://api.jquery.com/jQuery.getJSON/#jQuery-getJSON-url-data-success) o un [`jQuery.get()`](https://api.jquery.com/jquery.get/) antes que un [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch), como se hace en **este ejemplo**: 

**https://profesorfaco.github.io/dno037-2023/clase-07/ejemplo/**

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

[Con jQuery prepararemos un portafolio](https://profesorfaco.github.io/dno037-2023/clase-07/). Su preparación servirá de adelanto a la evaluación Nº2.

**El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2023/clase-07/)**.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-08)
