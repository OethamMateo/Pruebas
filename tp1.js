let estado = 0; 
let textos = [];  
let coloresFondos = [];
let enRutaAlternativa = false;



function preload() {
  textos = loadStrings('data/texto.txt'); 
}

function setup() {
  createCanvas(800, 600);


  coloresFondos = [
    color(50, 100, 150),  
    color(100, 150, 100),
    color(120, 180, 90),
    color(130, 160, 110),
    color(140, 170, 100),
    color(150, 160, 90),
    color(160, 150, 120),
    color(170, 180, 110),
    color(180, 190, 130),
    color(190, 200, 150),
    color(200, 210, 170),
    color(90, 90, 90),
    color(80, 80, 80),
    color(70, 70, 70),
    color(60, 60, 60),
    color(50, 50, 50),
    color(40, 40, 40),
    color(30, 30, 30),  

    color(80, 60, 60),  
    color(90, 70, 70),
    color(100, 80, 80)
  ];
  
  textAlign(CENTER);
}

function draw() {
  if (estado === 0) {
    pantallaPrincipal();
  } else if ((estado >= 1 && estado <= 17) || (estado >= 18 && estado <= 20)) {
    mostrarEscena(estado);
  } else if (estado === 3) {
    mostrarEscenaConBotones();
  }
}
