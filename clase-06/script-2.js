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