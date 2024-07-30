//let hour = date.getHours()
answer= prompt("Quel est ton prenom?")
function sayHello(firstName, hour) {
    let message = "Bonsoir "

    if (hour >= 18) {
        message += firstName
    } else {
        message = "Bonjour " + firstName
    }


    document.querySelector('h1').innerText = message;
}

sayHello(answer, 20)