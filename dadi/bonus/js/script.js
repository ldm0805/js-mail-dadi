// // Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// // 1. Generare un numero casuale per il giocatore;
// let n_player = Math.floor( Math.random() * 6) + 1;
// // 2. Generare un numero casuale per il computer;
// let n_computer = Math.floor( Math.random() * 6) + 1;

// console.log(`Il numero del giocatore è ${n_player}`);
// console.log(`Il numero del computer è ${n_computer}`);

// // 3. Controllare le seguenti condizioni:

// //     3.1 SE il giocatore ed il computer hanno lo stesso punteggio , mostrare il messaggio "è pareggio";
// if (n_player == n_computer){
//     console.log('Pareggio');
// }

// //     3.2 SE il computer ha il dado con il punteggio più alto , mostrare il messaggio "Il computer ha vinto";
// else if (n_computer > n_player){
//     console.log('Il computer ha vinto');
// }

// //     3.3 SE le precedenti condizioni non risultano vere, il giocatore ha il dado con il punteggio più alto , mostrare il messaggio "Il giocatore ha vinto";
// else{
//     console.log('Il giocatore ha vinto');
// }


let n_player
document.getElementById('pull_dice').innerHTML ='è il tuo turno';
let button = document.getElementById("dicebutton");
button.addEventListener("click", rollDice);

function rollDice() {
  /*Math.floor(Math.random() * (max - min + 1)) + min*/
  n_player = Math.floor( Math.random() * 6) + 1;

  /* Add a class of "roll" to #dice after it's clicked, so that the transform properties come to life: */
  dice.classList.toggle("roll");
}
