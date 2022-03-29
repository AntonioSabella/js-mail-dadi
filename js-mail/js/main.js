/* Chiedere all'utente la propria email e confrontarla con la lista delle email a cui è permesso l'accesso */

// Chiedere all'utente la propria mail

const full_name = prompt('Inserisci il tuo nome completo');

const user_mail = prompt('Inserisci la tua email');

const arrayAccessEmail = ["rossella@gmail.com","antonio@gmail.com","giorgio@gmail.com","giulio@gmail.com","alessandro@gmail.com","martina@gmail.com", "lucas@gmail.com"];
let info;

if (arrayAccessEmail.includes(user_mail)) {
    info = `Benvenuto ${full_name}. La tua email è contenuta nel database: Accesso confermato✔✔😎`;
    console.log(info);
    document.getElementById('welcome').innerHTML = info;
    document.getElementById("welcome").classList.add("access_on");
    } else {
        info = `Spiacente ${full_name}. La tua email non è presente nel database: Accesso Negato!!!`;
        console.log(info);
        document.getElementById('welcome').innerHTML = info;
        document.getElementById("welcome").classList.add("access_off");

    } 



