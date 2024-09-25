class Rectangulo {
  constructor(alto, ancho) {
    this.unidad = "m"
    this.alto = alto;
    this.ancho = ancho;
  }

  describete() {

    var msg = ""
    msg += `El rectangulo es de ${this.alto}${this.unidad} x ${this.ancho}${this.unidad}`
    msg += `, el área es de ${this.area()}${this.unidad}²`

    console.log(msg);
  }

  area() {
    return this.alto * this.ancho
  }
}

function ladoAleatorio(max = 10) {
  return Math.floor(Math.random() * (max) + 1)
}

var rectangulos = []
for (var i = 10000; i >= 0; i--) {
  rectangulos.push(
    new Rectangulo(ladoAleatorio(), ladoAleatorio()))
}

rectangulos.forEach(
  rectangulo => rectangulo.describete()
)
