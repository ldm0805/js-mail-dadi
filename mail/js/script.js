// 1. Creare un'array lista con delle email che posso accedere;

const mail_list =['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'minnie@gmail.com'];

// 2. Chiedere all'utente di inserire la sua mail;

let mail = prompt('Inserisci la tua email');

//Effettuare il controllo tramite la variabile booleana

let bool = false;



for(let i=0; i<mail_list.length; i++){

    if (mail_list[i] == mail){
        bool = true;   
    }
    }
    
    //3.1 SE la mail risulta nella lista, ALLORA il messaggio sarà "Complimenti hai effettuato l'accesso!"
        if (bool){
            console.log(`Complimenti hai effettuato l'accesso!`)
        }

    //3.2 SE la mail non risulta nella lista, ALLORA il messaggio sarà "Questa email non è presente nella lista"
        else{
            console.log(`Questa email non è presente nella lista`)
        }
