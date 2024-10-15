let estado = 0; 
let textos = [];  
let coloresFondos = [];
let enRutaAlternativa = false; 

//function preload(){
//  texto= loadStrings('data/texto.txt');
//  print(texto);
//}



function setup() {
  createCanvas(800, 600);

  
  // Inicializa los textos de las escenas
  textos = [
    "TITULO",
    "E1.",
    "E2.",
    "E3.",
    "E4.",
    "E5.",
    "E6.",
    "E7.",
    "L8.",
    "E9.",
    "D10.",
    "E11.",
    "E12.",
    "E13.",
    "E14.",
    "E15.",
    "E16.",
    "F1.",
    // Textos ruta alternativa
    "Ruta 2 E1.",
    "Ruta 2 E2.",
    "Ruta 2 F."
  ];

  coloresFondos = [
    color(50, 100, 150),  // Fondo pantalla principal
    color(100, 150, 100),  // Escena 1
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
     // ruta alternativa 1
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

function pantallaPrincipal() {
  background(coloresFondos[0]);
  fill(255); 
  text(textos[0], width / 2, height / 3);
  
  //botón
  fill(255, 100, 100);
  rectMode(CENTER);
  rect(width / 2, height / 2, 200, 60);

  //Texto del botón
  fill(255);
  text("Comenzar", width / 2, height / 2 + 10);
}

function mostrarEscena(numEscena) {
  background(coloresFondos[numEscena]);  // Fondo de la escena
  fill(50, 50, 50);  // Color del cuadro de diálogo
  rectMode(CORNER);
  rect(50, height - 150, width - 100, 100);  // Cuadro
  
  fill(255);  // Texto blanco
  textAlign(LEFT);
  text(textos[numEscena], 70, height - 110);  // Texto de la escena actual
}

function mostrarEscenaConBotones() {
  background(coloresFondos[3]);
  fill(50, 50, 50); 
  rectMode(CORNER);
  rect(50, height - 150, width - 100, 100);
  
  fill(255);
  textAlign(LEFT);
  text(textos[3], 70, height - 110);


  // Botón 1: Continuar por el camino normal
  fill(100, 200, 100);
  rect(width / 2 - 150, height / 2, 200, 60);  // Botón 1
  fill(0);
  text("Camino normal", width / 2 - 150, height / 2 + 10);

  // Botón 2: ruta alternativa
  fill(200, 100, 100);
  rect(width / 2 + 150, height / 2, 200, 60);  // Botón 2
  fill(0);
  text("Ruta alternativa", width / 2 + 150, height / 2 + 10);
}

function mousePressed() {
  if (estado === 0) {
    
    if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      estado = 1;  
    }
  } else if (estado >= 1 && estado < 17 && estado !== 3) {
    estado++; 
  } else if (estado === 3) {
    
    if (mouseX > width / 2 - 250 && mouseX < width / 2 - 50 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      estado = 4; 
    }
    
    else if (mouseX > width / 2 + 50 && mouseX < width / 2 + 250 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      estado = 18;  
      enRutaAlternativa = true;
    }
  } else if (estado >= 18 && estado < 20) {
    estado++;  
  }
}
