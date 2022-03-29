
const user_name_input = document.getElementById('userName');
const user_mail_input = document.getElementById('userEmail');
const verify_button = document.getElementById('verify');

let info;

verify_button.addEventListener('click', function(){

    const user_mail = user_mail_input.value;
    const user_name = user_name_input.value; 

    const arrayAccessEmail = ["rossella@gmail.com","antonio@gmail.com","giorgio@gmail.com","giulio@gmail.com","alessandro@gmail.com","martina@gmail.com", "lucas@gmail.com"];


  if (arrayAccessEmail.includes(user_mail)) {
    info = `Benvenuto ${user_name}. La tua email è contenuta nel database: Accesso confermato✔✔😎`;
    console.log(info);
    document.getElementById('welcome').innerHTML = info;
    document.getElementById("welcome").classList.add("access_on");
    } else {
        info = `Spiacente ${user_name}. La tua email non è presente nel database: Accesso Negato!!!`;
        console.log(info);
        document.getElementById('welcome').innerHTML = info;
        document.getElementById("welcome").classList.add("access_off");

    } 
})