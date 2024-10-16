let nomeHeroi = "Talles"
let xpHeroi = 5003
let nivel = ""

// - Validar se a condição for igual a verdadeiro, caso seja definir seu nivel.
switch(true) {
    case xpHeroi <= 1000:
        nivel = "Ferro"
        break
    case xpHeroi <= 2000:
        nivel = "Bronze"
        break
    case xpHeroi <= 5000:
        nivel = "Prata"
        break
    case xpHeroi <= 7000:
        nivel = "Ouro"
        break
    case xpHeroi <= 8000:
        nivel = "Platina"
        break
    case xpHeroi <= 9000:
        nivel = "Ascendente"
        break
    case xpHeroi <= 10000:
        nivel = "Imortal"
        break
    case xpHeroi >= 10001:
        nivel = "Radiante"
        break
}

console.log("O Herói de nome " + nomeHeroi + " está no nivel de: " + nivel)