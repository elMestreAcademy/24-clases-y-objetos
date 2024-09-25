class Rectangulo {
  constructor(alto, ancho) {
    var patata = "patata";

    this.alto = alto;
    this.ancho = ancho;
  }

  describete() {
    console.log(`El rectangulo es de ${this.alto} x ${this.ancho}`);
  }

  crece() {
    this.alto += 1
    this.ancho++
  }
}

const rectangulos = [
  new Rectangulo(4, 3),
  new Rectangulo(5, 8),
  new Rectangulo(6, 10),
];

rectangulos.forEach(rectangulo => rectangulo.describete())

// 1 - Para cada rectangulo, se va a calcular el area 
// 2 - Lista de 1000 rectanguilos aleatorios de lados entre 1 y 10