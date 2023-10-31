function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe um valor para a base do Triangulo "));
  const altura = parseFloat(
    prompt("Informe um valor para a altura do Triangulo ")
  );
  return (base * altura) / 2;
}
function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Defina um valor para a base do Retângulo "));
  const altura = parseFloat(
    prompt("Escolha um valor para a altura do Retângulo  ")
  );
  return base * altura;
}
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe um valor para o lado do Quadrado "));
  return lado * lado;
}
function calcularAreaTrapezio() {
  const baseMaior = parseFloat(
    prompt("Escolha um valor para a BASE MAIOR do Trapezio ")
  );
  const baseMenor = parseFloat(
    prompt("Agora, escolha um valor para a BASE MENOR ")
  );
  const altura = parseFloat(
    prompt("Agora, escolha um valor para a ALTURA do Trapezio")
  );
  return ((baseMaior + baseMenor) * altura) / 2;
}
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Escolha um valor para o RAIO do círculo "));
  return 3.14 * raio * raio;
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular a área do Triângulo\n" +
      "2. Calcular a área do Retângulo \n" +
      "3. Calcular a área do Quadrado\n" +
      "4. Calcular a área do Trapézio\n" +
      "5. Calcular a área do Círculo\n" +
      "6. Sair"
  );
}
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo();
        break;
      case "2":
        resultado = calcularAreaRetangulo();
        break;
      case "3":
        resultado = calcularAreaQuadrado();
        break;
      case "4":
        resultado = calcularAreaTrapezio();
        break;
      case "5":
        resultado = calcularAreaCirculo();
        break;
      case "6":
        alert("Obrigado !!! ");
      default:
        alert("Opção inválida");
    }

    if (resultado) {
      alert("Resultado " + resultado);
    }
  } while (opcao !== "6");
}
executar();
