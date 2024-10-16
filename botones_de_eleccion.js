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
  rect(width / 2 - 150, height / 2, 200, 60);
  fill(0);
  text("Camino normal", width / 2 - 150, height / 2 + 10);

  // Botón 2: ruta alternativa
  fill(200, 100, 100);
  rect(width / 2 + 150, height / 2, 200, 60); 
  fill(0);
  text("Ruta alternativa", width / 2 + 150, height / 2 + 10);
}
