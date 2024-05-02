// let dificuldade
// function dlc1(){
//     switch(dificuldade){
//     //caso 1 modo fácil até 10
//         case 1:
//             document.getElementById("Fácil") 
//             dificuldade = 10
//             //redirecionado para o modo fácil
//             break
//     //caso 2 modo médio até 50
//         case 2:
//         document.getElementById("Médio")
//         // redirecionar para o modo médio
//             dificuldade = 50
//             break
//     //caso 3 modo dificil até 100
//         case 3:
//             document.getElementById("Dificil")
//             // redirecionar para o modo dificil
//             dificuldade = 100
//             break
//                 }
// }
function dificulade(dificuldade) {
    switch (dificuldade) {
      case 'fácil':
        ns = generateRandomNumber(1, 10);
        break;
      case 'médio':
        ns = generateRandomNumber(1, 50);
        break;
      case 'difícil':
        ns = generateRandomNumber(1, 100);
        break;
      default:
        startGame('pve');
        
    }
  }
// let modo

// document.getElementById("Fácil") = "";
// document.getElementById("Médio") = "";
// document.getElementById("Dificil") = "";

// function facil(){
//         }
//     }

// } 

// function medio(){

// }

// function dificil(){
    
// }