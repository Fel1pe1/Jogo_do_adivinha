// gerador de numero basico PRA DIFICULDADE MUDAR
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;


function adivinharNumero() {
    // a pergunta
    const chute = Number(prompt("Adivinhe o número (entre 1 e 100):"));


    // fiz um extra pra ver se o usuario botou um valor valido, o isnan checa isso. PRA DIFICULDADE MUDAR
    if (isNaN(chute) || chute < 1 || chute > 100) {
        alert("Por favor, insira um número válido.");
        return;
    }


    // aqui aumenta o numero de tentativas
    tentativas++;


    // aqui ele verifica o resultado e da um retorno
    if (chute === numeroSecreto) {
        alert(`Parabéns! Você acertou o número em ${tentativas} tentativas!`);
    } else if (chute < numeroSecreto) {
        alert("Tente um número maior.");
        adivinharNumero();
    } else {
        alert("Tente um número menor.");
        adivinharNumero();
    }
}


// Inicia o jogo
adivinharNumero();
