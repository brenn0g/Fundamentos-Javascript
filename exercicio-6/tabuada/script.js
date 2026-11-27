alert("Bem-vindo(a) ao Robô Tabuada - BGWEB")

const numeroEscolhido = prompt("Informe o número escolhido: ")

let resultado = ""

for(let i = 1; i <= 20; i++) {
    resultado += " -> " + numeroEscolhido + " x " + i + " = " + (numeroEscolhido * i) + "\n"
}

alert("Tabuada completa do número " + numeroEscolhido + ": " + "\n\n" + resultado)