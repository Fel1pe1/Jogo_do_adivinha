const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function adivinharNumero() {
    const chute = parseInt(document.getElementById("chute").value);
    let resultadoElement = document.getElementById("resultado");

    if (isNaN(chute) || chute < 1 || chute > 100) {
        resultadoElement.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativas++;

    if (chute === numeroSecreto) {
        resultadoElement.innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    } else if (chute < numeroSecreto) {
        resultadoElement.innerHTML = "Tente um número maior.";
    } else {
        resultadoElement.innerHTML = "Tente um número menor.";
    }

    // Limpa o valor do input
    document.getElementById("chute").value = "";

}






