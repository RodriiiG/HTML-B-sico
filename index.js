function jugar(eleccion) {
  var ganador = Math.floor(Math.random() * 3) + 1;
  var mensaje = "Elegiste " + eleccion + ". Número sorteado: " + ganador + ". ";
  if (eleccion === ganador) {
    mensaje += "Ganaste un descuento en perforacion";
  } else {
    mensaje += "No ganaste";
  }
  alert(mensaje);
}
