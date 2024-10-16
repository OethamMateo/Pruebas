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
