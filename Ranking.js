let vitorias = 101
let derrotas = 8

function ranking(vitorias, derrotas){
    let total = vitorias - derrotas
    return total
}

let saldoRankeadas = ranking(vitorias, derrotas)

let nivel = ""

if (vitorias <= 10){
    nivel = "Ferro"
}
else if (vitorias <= 20){
    nivel = "Bronze"
}
else if (vitorias <= 50){
    nivel = "Prata"
}
else if (vitorias <= 80){
    nivel = "Ouro"
}
else if (vitorias <= 90){
    nivel = "Diamante"
}
else if (vitorias <= 100){
    nivel = "Lendário"
}
else{
    nivel = "Imortal"
}

console.log(`O Herói tem saldo de ${saldoRankeadas} e está no nível ${nivel}`)