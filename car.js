class Car {
  constructor(brand, model) {
    this.showed = 0
    this.carname = brand;
    this.model = model
    this.value = 0
  }

  show() {
    return ' - MODELO ' + 
           ' Marca: ' + this.carname + 
           ' Modelo: ' + this.model + 
           ' Precio: ' + this.value;
  }
}

class Expo extends Car {

  constructor (brand, model, value) {
    super(brand, model)
    this.price = value
    this.IVA = (0.21)
  }

  show() {
    let msg = ` - VENDIENDO ${this.model}: por ${this.price}`;
    this.showed++
    return msg
  }

  set price(price) {

    let IVA = price * this.IVA

    this.value = price - IVA
  }

  get price() {

    let precio = this.value * ((100 - this.showed) / 100)

    precio += precio * this.IVA

    return precio
  }
}


let car1 = new Car("Toyota", "Avensis")
console.log(car1.show())

let expo1 = new Expo("SEAT", "Makinero", 10000)
console.log(expo1.show())
console.log(expo1.show())
console.log(expo1.show())
console.log(expo1.show())
console.log(expo1.show())
console.log(expo1.show())
console.log(expo1.price)
console.log(expo1.value)
console.log(expo1.price)
console.log(expo1.show())

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());