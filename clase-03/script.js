var elEncabezado = document.querySelector("header");
var elColor, starWars;

function preload() {
    starWars = loadJSON("https://swapi.dev/api/people/?format=json");
}

function setup() {
    //hago algo con lo que precargué
    var lasOpciones = [];
    starWars.results.forEach((p) => lasOpciones.push(p.name));
    console.log(lasOpciones);
    //selecciono el elemento con esta identidad
    var descarga = select("#descarga");
    descarga.mousePressed(artemania);
    //selecciono el elemento con esta identidad    
    var descarga = select("#borra");
    descarga.mousePressed(borrador);
    createElement("h1", "Podrías dibujar a <span>" + random(lasOpciones) + "</span>").parent(elEncabezado).id("title");
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background("#eceff1");
    elColor = createColorPicker("#555555").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
}

function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function artemania() {
    saveCanvas("mi_atacazo_artistico", "jpg");
}

function borrador() {
    background("#eceff1");
}