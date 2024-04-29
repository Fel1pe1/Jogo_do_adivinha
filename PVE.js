

let NumeroAleatorio = Math.floor(math.random() * //inserir dificuldade) + 1;
let advinha = 0;


function checar() {
    const tentativas = Number(document.getElementById("tentativas").value)


    if (tentativas === NumeroAleatorio) {
        advinha++
        document.getElementById("mensagem").textContent="Parabens! Você acertou " + NumeroAleatorio + "em " + advinha + "tentativas."
        document.getElementById("tentativas").disabled = true
    }
    else if (tentativas < NumeroAleatorio) {
        advinha++
        document.getElementById("mensagem").textContent = "tente novamente, o numero é maior."
    } else{
        advinha++
        document.getElementById("mensagem").textContent = "tente novamente, O numero é menor"
    }
}




