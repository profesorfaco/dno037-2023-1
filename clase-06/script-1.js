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