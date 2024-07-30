let given_number = parseInt(prompt("What is your number ?"))

function game_play(){

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

    return "The number was 22 ! :)";
  }
  return game_play()
}

game_play()  

document.querySelector("h1").innerText = game_play();
