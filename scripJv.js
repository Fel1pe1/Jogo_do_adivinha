let mostrar = document.getElementById("resultado1")
let t = 1

function pvp(){
    let m = Number(document.getElementById("miste").value)
    let n = Number(document.getElementById("numero").value)
    
    if(n != m){
        //Se o numero for maior
        if(n > m){
            t++
            mostrar.innerHTML = "Seu chute foi alto"

        //Se o numero for menor
        }else {
            mostrar.innerHTML = "Seu chute foi baixo"
            t++
        }
    }else{
    mostrar.innerHTML = "Parabens!!! O total de tentativas foi de " + t + "° tentativa"
    t = 1
    }

    document.getElementById("numero").value = "";
}