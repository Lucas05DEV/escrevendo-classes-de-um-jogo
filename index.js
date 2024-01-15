class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataques = {
            "mago": "Magias",
            "guerreiro": "Espada",
            "monge": "Artes Marciais",
            "ninja":  "Shurikens"
        }

        console.log(`O ${this.tipo} atacou usando ${ataques[this.tipo]}!`)
    }
}

let heroi = new Heroi("Ryu Hayabusa", 2700, "ninja")

heroi.atacar()