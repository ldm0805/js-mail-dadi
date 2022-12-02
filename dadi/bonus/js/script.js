// // Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//Dichiarazioni variabili

let n_player, n_player_2, button
let flag = 0, game = 0, game_two = 0, game_three = 0 , counter = 0; 

//Creazione bottone ed azione bottone
button = document.getElementById("dicebutton");
button.addEventListener("click", rollDice);
function rollDice() {

    //Generare 3 numeri random per entrambi i giocatori, tre volte
      if(counter < 3){

    // Creazione numeri randomici per i due player
      n_player = Math.floor( Math.random() * 6) + 1;
      document.getElementById('numero').innerHTML = `Il numero del giocatore è ${n_player}.`;
      
      n_player_2 = Math.floor( Math.random() * 6) + 1;
      document.getElementById('numero_2').innerHTML = `Il numero del pc è ${n_player_2}.`;

      if(n_player > n_player_2){
        game++
      }

      else if(n_player < n_player_2){
        game_two++ 
      }
      
      else{
        game_three++ 
      }
      counter++
      /* Add a class of "roll" to #dice after it's clicked, so that the transform properties come to life: */
      dice.classList.toggle("roll");
    }
    
    //Calcolo risultati
    if(counter == 3){

     if(game == game_two){
       document.getElementById('result_game').innerHTML ='Pareggio.';
     }

     else if(game < game_two){
      document.getElementById('result_game').innerHTML ='Il giocatore virtuale ha vinto.';
     }

     else{
      document.getElementById('result_game').innerHTML ='Il giocatore umano ha vinto.';
     }
    }
  }