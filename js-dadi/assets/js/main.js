/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto */

//Generare numero random per giocatore

let player_number = Math.floor(Math.random() * 6) + 1;
console.log(player_number);

//Generare numero random per il computer

let computer_number = Math.floor(Math.random() * 6) + 1;
console.log(computer_number);

let info;

//Sanciamo il vincitore in base al numero più alto

if (player_number > computer_number) {
        console.log(`${"Player is the winner🧒🎆"}`);
        info = `${"Player is the winner🧒🎆"}`;
        document.querySelector('.winner').innerHTML = info;
    } else if (player_number < computer_number) {
        console.log(`${"Computer is the winner🤖🎆"}`);
        info = `${"Computer is the winner🤖🎆"}`;
        document.querySelector('.winner').innerHTML = info; 
    } else if (player_number = computer_number) {
        console.log(`${"It's a Draw🙌"}`);
        info = `${"It's a Draw🙌"}`;
        document.querySelector('.winner').innerHTML = info;
    }
  
