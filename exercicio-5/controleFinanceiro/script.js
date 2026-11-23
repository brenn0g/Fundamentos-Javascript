alert("Bem-vindo ao Controle Financeiro - BGWEB");

let value = parseFloat(prompt("Qual o seu saldo incial?"));
let option = "";
let addValue = "";
let subValue = "";

do {
  option = parseFloat(
    prompt(
      "Menu Controle Financeiro - BGWEB" +
        "\n" +
        `\nSaldo Disponivel: R$${value},00` +
        "\n" +
        "\n1 - Adicionar Valor" +
        "\n2 - Retirar Valor" +
        "\n3 - Sair",
    ),
  );

  switch (option) {
    case 1:
      addValue = parseFloat(prompt("Qual o valor a ser adicionado?"));
      value += addValue;
      break;
    case 2:
      subValue = parseFloat(prompt("Qual valor a ser retirado?"));
      value -= subValue;
      break;
    case 3:
      alert("Saindo Em Segurança...");
      alert("Volte Sempre!");
      break;
    default:
      alert("Opção Inválida, Tente Novamente.")
      break;
    
  }
} while (option !== 3);
