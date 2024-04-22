//GENERO PROMT PER CHIEDRE ALL'UTENTE LA LISTA
const mailUser = prompt("Inserisci la tua mail")
console.log("La mail dell'utente è", mailUser)

//CREO LISTA MAIL
const mailAccess = [
    "mail.@prova.it",
    "giuseppe.@prova.it",
    "peppe.@prova.it",
    "peppe@prova.it",
    "giueppe@prova.it",
    "mail.@accesso.it",
    "mail.@provaaccesso.it",
    "mail.@boolean.it",
]
mailAccess.push("giuseppe@Boolean.it")

const div = document.getElementById("mail")

//Nel ciclo sotto Stampo messaggio sia se nella lista c'è sia se nella lista non c'è

//Ciclo per vedere se la mail dell'utente corrisponde a quella della lista
// for (let number = 0; number < mailAccess.length; number++) {
//     //se corrisponde allora può accedere
//     if (mailUser == mailAccess[number]) {
//         console.log("L'utente è nella lista e può Accedere", mailAccess[number])
//     }
//     //se non corrisponde non può accedere
//     else if (mailUser != mailAccess[number]) {
//         console.log("Email Sbagliata")
//     } 
// }

// Stampo messaggio solo se nella lista c'è
// for (let number = 0; number < mailAccess.length; number++) {
//     //se corrisponde allora può accedere
//     if (mailUser == mailAccess[number]) {
//         console.log("L'utente è nella lista e può Accedere", mailAccess[number])
//     }
// }

//Bonus stampo messaggio positivo o negativo in base al caso
for (let number = 0; number < mailAccess.length; number++) {
    //se corrisponde allora può accedere
    if (mailUser == mailAccess[number]) {
        div.innerHTML += `<div class="user">L'utente è nella lista e può Accedere</div>`
        console.log("L'utente è nella lista e può Accedere", mailAccess[number])
    }
    else {
        div.innerHTML += `<div class="no-user">Negativo l'utente non è nella lista</div>`
        console.log("Negativo l'utente non è nella lista")
    }
}