// 1. Creare un'array lista con delle email che posso accedere;

const mail_list = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'minnie@gmail.com'];


// Collegamento button
let button = document.getElementById('save_data');

// Bottone per importare la mail da HTML
button.addEventListener('click', function(){
    
    //Recupero della mail da HTML in una variabile
    let mail = document.getElementById("mail_up").value; 
    
    //Effettuare il controllo tramite la variabile booleana
    let bool = false;

    for(let i=0; i < mail_list.length; i++){

    if (mail_list[i] === mail){
        
        bool = true;   
    }
    }

    // SE la mail risulta nella lista, ALLORA il messaggio sarà "Complimenti hai effettuato l'accesso!"
        if (bool){
            document.getElementById('result').innerHTML ="Complimenti hai effettuato l'accesso!";
        }

    // SE la mail non risulta nella lista, ALLORA il messaggio sarà "Questa email non è presente nella lista"
        else{
            document.getElementById('result').innerHTML ="Questa email non è presente nella lista";

        }
    });


        