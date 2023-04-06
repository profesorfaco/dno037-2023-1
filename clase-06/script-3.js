async function tercero() {
    const consulta = await fetch("https://raw.githubusercontent.com/MinCiencia/Datos-COVID19/master/output/producto5/TotalesNacionales.csv");
    const data = await consulta.text();
    const filas = data.split("\n");
    const fechas = filas[0].split(",").slice(1);
    const activos = filas[5].split(",").slice(1);
    //Ahora puedo armar el gráfico
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
            responsive: true,
            layout: {
                padding: 20,
            },
        },
    });
}
tercero().catch((error) => console.error(error));