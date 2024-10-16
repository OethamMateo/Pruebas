function mostrarEscena(numEscena) {
  background(coloresFondos[numEscena]);  // Fondo de la escena
  fill(50, 50, 50);  // Color del cuadro
  rectMode(CORNER);
  rect(50, height - 150, width - 100, 100);  // Cuadro
  
  fill(255);
  textAlign(LEFT);
  text(textos[numEscena], 70, height - 110);  // Texto de la escena
}
