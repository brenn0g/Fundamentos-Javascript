alert("Menu Interativo - Banco BGWEB");

let menu = "";

do {
    menu = parseFloat(
    prompt(
      "Menu Interativo - BGWEB" +
        "\n" +
        "\nEscolha uma das opções: " +
        "\n1 - Consultar Saldo" +
        "\n2 - Depositar" +
        "\n3 - Sacar" +
        "\n4 - FAQ" +
        "\n5 - Encerrar",
    ),
  );
  
  switch (menu) {
    case 1:
        alert("Seu saldo é de...")
        break;
    case 2:
        alert("Qual valor a ser depositado...")
        break;
    case 3:
        alert("Qual o valor do saque...")
        break;
    case 4:
        alert("Acesse o link com o FAQ...")
        break;
    case 5:
        alert("Saindo em segurança...")
        break;
  }

} while(menu !== 5);

alert("Volte Sempre!")