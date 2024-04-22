console.log("ciao giuseppe")
const div = document.getElementById("dadi")

//GENERO NUMERO PER GIOCATORE
const userNumber = Math.floor(Math.random() * 6 + 1)
div.innerHTML += `<div class="user">${userNumber}</div>`
console.log(userNumber)



//GENERO UN NUMERO PER IL COMPUTER
const bothNumber = Math.floor(Math.random() * 6 + 1)
div.innerHTML += `<div class="both">${bothNumber}</div>`
console.log(bothNumber)

//SE IL NUMERO USER è MAGGIORE DI BOTH ALLORA VINCE
if (userNumber > bothNumber){
    div.innerHTML += `<div class="winner">Il Vincitore è User</div>`
    console.log("win user")
}
// SE IL NUMERO è UGUALE è PAREGGIO
else if (userNumber == bothNumber) {
    div.innerHTML += `<div class="winner">Pareggio</div>`
    console.log("draw")
}
//ALTRIMENTI VINCE IL BOTH
else {
    div.innerHTML += `<div class="winner">Il Vincitore è Both</div>`
    console.log("win both")
}
