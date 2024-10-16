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
    } else if (mouseX > width / 2 + 50 && mouseX < width / 2 + 250 && mouseY > height / 2 - 30 && mouseY < height / 2 + 30) {
      estado = 18;  
      enRutaAlternativa = true;
    }
  } else if (estado >= 18 && estado < 20) {
    estado++;  
  }
}
