// <h1>Jogo de Adivinhação PvE</h1>
//     <p>Tente adivinhar o número entre 1 e 100:</p>
//     <input type="number" id="tentativas" min="1" max="100">
//     <button onclick="checar()">Enviar Palpite</button>
//     <p id="mensagem"></p>



let NumeroAleatorio = Math.floor(math.random() * 20) + 1;
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



