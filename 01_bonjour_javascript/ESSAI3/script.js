let username = prompt("Quel est ton prénom ?")
username

function sayHello(firstname, hour) {
    if (hour >= 18) {
        let message = "Bonsoir "
        return message + firstname + " !"
    } else {
        message = "Bonjour "
        return message + firstname + " !"
    }
}

sayHello()

// console.log(sayHello("Beyoncé", 11))
// console.log(sayHello("Beyoncé", 18))
// console.log(sayHello("Beyoncé", 17))

document.getElementById('h1').innerText = sayHello(username, 11)
document.getElementById('h2').innerText = sayHello(username, 18)
document.getElementById('h3').innerText = sayHello(username, 17)