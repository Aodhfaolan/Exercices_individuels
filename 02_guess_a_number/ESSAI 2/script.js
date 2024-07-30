let numberToGuess = 22
let minRange = 0
let maxRange = 50

function player1() {
    let numberPlr1 = parseInt(prompt(`Entrez un nombre entre ${minRange} et ${maxRange}`))
    console.log(numberPlr1)
    return numberPlr1
}



function didIWin(answer, numberToGuess) {
    if (answer < numberToGuess) {
        alert("PLUS GRAND")
        return false
    }
    else if (answer > numberToGuess) {
        alert("PLUS PETIT");
        return false
    } else {
        alert("BRAVO OMG")
        return true
    }
}


function gamePlay() {
    let numberPlr1 = player1();
    if (numberPlr1 >= minRange && numberPlr1 >= maxRange) {
        didIWin(numberPlr1, numberToGuess);
    } else {
        alert(`Veuillez rentrer un nombre entre ${minRange} et ${maxRange}`);
    }
}

gamePlay()
