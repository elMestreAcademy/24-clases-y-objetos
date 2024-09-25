class Cola {
    mover() {
        console.log("mueve la colita")
    }
}

class Animal {
    constructor(nombre) {
        this.nombre = nombre || "Animalito" 
        this.patas = 2
    }

    caminar() {
        let plural = this.patas > 1 ? 's' : ''
        let msg = ''
        msg = `${this.nombre} esta caminando con su` + plural
        msg += this.patas == 1 ? ' pata de palo' : ` ${this.patas} patas`

        console.log(msg)
    }

    hablar() {
        console.log(`${this.nombre} esta hablando`)
    }

    amputar() {
        this.patas--
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre || "Perro")
        this.cola = new Cola()
    }

    hablar() {
        console.log(`${this.nombre} esta hablando con su hocico`)
    }

    ladrar() {
        console.log(`${this.nombre} está ladrando`)
    }
}

class Pato extends Animal {
    constructor(nombre) {
        super(nombre || "Pato")
        this.pico = 1
        this.alas = 2
        this.plumas = 1000
        this.color = "blanco"
        this.cola = new Cola()
    }

    nadar() {
        console.log(`${this.nombre} esta nadando con sus ${this.alas} alas`)
    }

    hablar() {
        console.log(`${this.nombre} esta hablando con su ${this.pico} pico`)
    }
}

class Sobrino extends Pato{
    constructor(nombre, color) {
        super()
        this.nombre = nombre
        this.color = color
    }

    presentate() {
        const msg = `Hola, soy ${this.nombre} y soy sobrino de Donald`
        console.log(msg)
    }

    observar() {
        let msg = `Este sobrino es ${this.color}`
        console.log(msg)
    }
}

class Patoburgo {
    constructor() {
        this.habitantes = []
        this.contador = 0

        let registra = [
            // new Animal(),
            new Pato("Pepito", "naranja"),
            new Pato(),
            new Perro("Pete"),
            new Pato(),
            new Perro(),
            new Sobrino("Juanito", "rojo"),
            new Sobrino("Jorgito", "verde"),
            new Sobrino("Jaimito", "azul"),
        ]

        registra.forEach(habitante => this.empadronar(habitante))
    }

    empadronar(habitante) {
        this.contador++
        this.habitantes.push(habitante)
    }

    visitar() {

        console.log(`Hay ${this.contador} animales en Patoburgo:\n`)

        this.habitantes.forEach( habitante => {
            if (habitante.nombre == "Pete") {
                habitante.amputar()
            }

            if(habitante instanceof Animal){
                habitante.caminar()
                habitante.hablar()
            }

            if(habitante instanceof Perro){
                habitante.ladrar()
            }

            if(habitante instanceof Sobrino){
                habitante.observar()
            }

            console.log('  --- ')
        })
    }
}

(new Patoburgo()).visitar()