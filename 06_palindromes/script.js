const month31 = [1, 3, 5, 7, 8, 10, 12]
const month30 = [4, 6, 9, 1]
const month28 = [2]

function maxDaysInMonth(month) {
    if (month31.includes(month)) {
        return 31
    } else if (month30.includes(month)) {
        return 30
    } else if (month28.includes(month)) {
        return 28
    } else {
        return false
    }
}
//parametre à l'index 2
// console.log(maxDaysInMonth("01"))
// console.log(maxDaysInMonth("06"))
// console.log(maxDaysInMonth("02"))
// console.log(maxDaysInMonth("22"))


function isValidDate(date) {
    const newDate = date.split("/")
    // console.log(newDate)
    let day = parseInt(newDate[0])
    let month = parseInt(newDate[1])
    let year = parseInt(newDate[2])
    // console.log("mois :", month);
    for (let i = 0; i < newDate.length; i++) {
        if (year < 999 || year > 9999) {
            // console.log("year :", year)
            return false
        } if (maxDaysInMonth(month) === false) {
            // console.log("month :", maxDaysInMonth(month))
            return false
        } if (day < 1 || day > 31) {
            // console.log("day :", day)
            return false
        }
        return true
    }
}

function isPalindrome() {
    const date_envers = date.split("/").reverse().join("")
    console.log(date_envers)

    if (date.split("/").join("") === date_envers) {
        return true
    } else {
        return false
    }
}


console.log(isValidDate("03/04/2001"));
console.log(isValidDate("03/14/2001"));
