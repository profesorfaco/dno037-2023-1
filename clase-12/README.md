### Diseño y Nuevos Medios → Clase 12 → 24/05/2023

# Bootstrap v5.1

Hoy trabajaremos con dos *themes* basados en Bootstrap. Partiremos:

- descargando un theme de StartBoostrap → https://startbootstrap.com/theme/landing-page

- copiando código fuente de un ejemplo de Bootstrap → https://getbootstrap.com/docs/5.1/examples/album/

Utilizaremos:

- el `<header>…</header>` y el `<footer>…</footer>` del ejemplo de Bootstrap.

- las `<section>…</section>` del Theme de StartBootstrap, descartando la que tiene identidad `signup` y modificando las que tienen clase `showcase` y `testimonials`.

- - - - - - - 

**Para la modificación del *showcase*, utilizaremos Javascript, desde una variable que contendrá un arreglo con los datos a desplegar.**

Descartemos las imágenes que vienen con el tema y aprovechemos las imágenas aleatorias de *[Lorem Picsum](https://picsum.photos/). The Lorem Ipsum for photos*:

```
const datos = [
    {
        picsum: "https://picsum.photos/900/600?random=1",
        title: "Fully Responsive Design",
        text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=2",
        title: "Updated For Bootstrap 5",
        text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=3",
        title: "Easy to Use & Customize",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    }
];

```

Con un [`forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) y un [`if...else`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else) reconstruiremos la sección:

```
datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(assets/img/bg-showcase-1.jpg);"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>Uno</h2><p class="lead mb-0">Párrafo de uno</p></div></div>';
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(assets/img/bg-showcase-2.jpg);"></div><div class="col-md-6 my-auto showcase-text"><h2>Otro</h2><p class="lead mb-0">Párrafo de otro</p></div></div>';
    }
});
```

La condición `(i % 2 == 0)` pregunta si acaso el residuo o resto de dividir `i` en `2` es igual a `0`. 

Por lo definido en el `forEach()` ofrecido para copiar, `i` se usa para contar el elemento del arreglo referido como `d` cada vez. Cuando se tiene un arreglo con tres `d`, el valor de `i` es primero `0`, luego `1` y finalmente `2`. En la división de 0 y 2 por 2, el residuo es 0. Por ese residuo 0 sabemos que es par. El número que no cumpla la condición, es impar.

- - - - - - - 

**Para la modificación del *testimonials* haremos `fetch()` de una *free, open-source API for generating random user data. Like Lorem Ipsum, but for people*:**

```
async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=3");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);
}
users().catch((error) => console.error(error));
```
De los `resultados` aprovechemos: `picture.large`, `name.first`, `name.last`, `location.city`, `location.country`, `email`. 

Con tales datos, la sección cambiará de un *What people are saying...* a un *Contact us*.

- - - - - - - 

**Una vez tengamos nuesta mezcla de *themes* funcionando:**

Podemos revisar los [Bootstrap Icons](https://icons.getbootstrap.com/). Con ellos podríamos acompañar de mejor manera algunos cambios en los textos de la parte superior de nuestra página. 

Revisemos dos modos de uso: 

- Código fuente (SVG) → *Embed your icons within the HTML of your page (as opposed to an external image file)…*

- Fuente tipográfica (Icon Font) → *Include the icon web fonts in your page via CSS, then reference the class names as needed…*

Tan pronto cada estudiante esté conforme con el resultado, tendrá que comenzar a simplificar la carpeta descargada al comienzo: 

> El proceso para alcanzar un estado idóneo de simplicidad puede llegar a ser realmente complejo; permítame, por tanto, que se lo simplifique. *La manera más sencilla de alcanzar la simplicidad es mediante la reducción razonada*. En caso de duda, elimínelo. Pero cuidado con aquello que se elimina ([Maeda, 2006:1](https://es.cl1lib.org/book/837058/6200d6)).

Ideal sería simplicar hasta la purificación :pray: https://purifycss.online/

Recuerden que para poder usar [PurifyCSS Online](https://purifycss.online/) es necesario tener publicado su trabajo [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Como en cada clase, obtendremos un ejercicio que puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2023/tree/main/clase-11) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2023/tree/main/clase-13)
