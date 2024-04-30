<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Adivinhação</title>
</head>
<body>
    <h1>Jogo de Adivinhação</h1>
    <label for="chute">Adivinhe o número (entre 1 e 100):</label>
    <input type="text" id="chute">
    <button onclick="adivinharNumero()">Adivinhar</button>
    <p id="resultado"></p>
    <script>
        const numeroSecreto = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;

        function adivinharNumero() {
            const chute = parseInt(document.getElementById("chute").value);
            const resultadoElement = document.getElementById("resultado");

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

            // Se quiser, pode adicionar um foco ao input para facilitar a próxima tentativa
            document.getElementById("chute").focus();
        }
    </script>
</body>
</html>


