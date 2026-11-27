alert("Sistema de detecção de Palíndromos - BGWEB")

const palavra = prompt("Digite a palavra a ser inspecionada: ")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i]
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!\n\n" + palavra + " === " + palavraInvertida)
} else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida )
}