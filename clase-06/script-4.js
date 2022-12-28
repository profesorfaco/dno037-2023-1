async function visualizacion() {
    const consulta = await fetch("https://raw.githubusercontent.com/profesorfaco/dno037-2023/main/clase-06/zonal_annual_means.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    //declaro tres arreglos
    var x = [];
    var norte = [];
    var sur = [];
    //guardo datos en cada uno
    filas.forEach((fila) => {
        x.push(fila.split(",")[0]);
        norte.push(Number(fila.split(",")[2]));
        sur.push(Number(fila.split(",")[3]));
    });
    //reviso los datos en la consola:
    console.log(x);
    console.log(norte);
    console.log(sur);
    //ahora construyo el gráfico
    new Chart(document.getElementById("calentamiento"), {
        type: "line",
        data: {
            labels: x.slice(1),
            datasets: [
                { label: "Hemisferio Norte", data: norte.slice(1), borderColor: "#455a64", borderWidth: 1, pointRadius: 2 },
                { label: "Hemisferio Sur", data: sur.slice(1), borderColor: "#856d62", borderWidth: 1, pointRadius: 2 },
            ],
        },
    });
}
visualizacion().catch((error) => console.error(error));