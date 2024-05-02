const numHard = Math.floor(Math.random() * 1000) + 1;
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const numEasy = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
let resultadoElement = document.getElementById("resultado");
let resultadoElement2 = document.getElementById("resultado2");

function adivinharNumero() {
    const chute = parseInt(document.getElementById("chute").value);

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
function easyAdivinha() {
    
    const chuteF = parseInt(document.getElementById("facil").value);

    if (isNaN(chuteF) || chuteF < 1 || chuteF > 10) {
        resultadoElement.innerHTML = "Por favor, insira um número válido entre 1 e 10.";
        return;
    }

    tentativas++;

    if (chuteF === numEasy) {
        resultadoElement2.innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    } else if (chuteF < numEasy) {
        resultadoElement2.innerHTML = "Tente um número maior.";
    } else {
        resultadoElement2.innerHTML = "Tente um número menor.";
    }

    // Limpa o valor do input
    document.getElementById("facil").value = "";
    
}
function medioAdivinha() {
    const chute = parseInt(document.getElementById("medio").value);

    if (isNaN(chute) || chute < 1 || chute > 100) {
        resultadoElement2.innerHTML = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativas++;

    if (chute === numeroSecreto) {
        resultadoElement2.innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    } else if (chute < numeroSecreto) {
        resultadoElement2.innerHTML = "Tente um número maior.";
    } else {
        resultadoElement2.innerHTML = "Tente um número menor.";
    }

    // Limpa o valor do input
    document.getElementById("medio").value = "";

    
}

function hardAdivinha() {
    const chuteH = parseInt(document.getElementById("hard2").value);

    console.log(numHard);
    if (isNaN(chuteH) || chuteH < 1 || chuteH > 1000) {
        resultadoElement2.innerHTML = "Por favor, insira um número válido entre 1 e 1000.";
        return;
    }

    tentativas++;

    if (chuteH === numHard) {
        resultadoElement2.innerHTML = `Parabéns! Você acertou o número em ${tentativas} tentativas!`;
    } else if (chuteH < numHard) {
        resultadoElement2.innerHTML = "Tente um número maior.";
    } else {
        resultadoElement2.innerHTML = "Tente um número menor.";
    }

    // Limpa o valor do input
    document.getElementById("hard2").value = "";

    
}






