

let given_number;

function ask_number() {
  given_number = parseInt(prompt("What is your number ?"));

  function did_i_win(given_number) {
    if (given_number == 22) {
      alert("You won !");
      return true;
    } else if (given_number < 22) {
      alert("Higher !");
    } else {
      alert("Lower !");
    }
    return false;
  }

  did_i_win(given_number);

  return "The number was 22 ! :)";
}

document.querySelector("h1").innerText = ask_number();
