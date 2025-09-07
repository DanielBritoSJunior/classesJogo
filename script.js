class CriarHeroi {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let ataque
        if(this.type === "mago"){
            ataque = "usou magia"
        } else if(this.type === "guerreiro"){
            ataque = "espada"
        } else if(this.type === "monge"){
            ataque = "artes marciais"
        } else if(this.type === "ninja"){
            ataque = "shuriken"
        } else if(this.type === "arqueiro"){
            ataque = "arco"
        }

        console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}

let heroi1 = new CriarHeroi("Oliver Queen", 34, "arqueiro")
heroi1.attack()

let heroi2 = new CriarHeroi("Espartano", 30, "guerreiro")
heroi2.attack()