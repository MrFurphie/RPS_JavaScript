function play(choice) {
let pChoice = choice;
let oChoice = Math.floor(Math.random() * 3 + 1);
document.getElementById('o-img').src = "svg/mystery.svg";
document.getElementById('result').innerHTML = "?";
let wins = sessionStorage.getItem("winCount");
let ties = sessionStorage.getItem("tieCount");
let losses = sessionStorage.getItem("lossCount");
if (wins == null) {
  wins = 0;
} else {
  wins = wins;
}
if (ties == null) {
  ties = 0;
} else {
  ties = ties;
}
if (losses == null) {
  losses = 0;
} else {
  losses = losses;
}
setTimeout(() => {
  if (oChoice === 1 && pChoice === "rock") {
    document.getElementById('o-img').src = "svg/rock.svg";
    document.getElementById('result').innerHTML = "Tie.";
    ++ties;
  } else if (oChoice === 1 && pChoice === "scissors")  {
    document.getElementById('o-img').src = "svg/rock.svg";
    document.getElementById('result').innerHTML = "You lose.";
    ++losses;
  } else if (oChoice === 1 && pChoice === "paper") {
    document.getElementById('o-img').src = "svg/rock.svg";
    document.getElementById('result').innerHTML = "You win.";
    ++wins;
  } else if (oChoice === 2 && pChoice === "rock")  {
    document.getElementById('o-img').src = "svg/paper.svg";
    document.getElementById('result').innerHTML = "You lose.";
    ++losses;
  } else if (oChoice === 2 && pChoice === "paper")  {
    document.getElementById('o-img').src = "svg/paper.svg";
    document.getElementById('result').innerHTML = "Tie.";
    ++ties;
  } else if (oChoice === 2 && pChoice === "scissors")  {
    document.getElementById('o-img').src = "svg/paper.svg";
    document.getElementById('result').innerHTML = "You win.";
    ++wins;
  } else if (oChoice === 3 && pChoice === "rock")  {
    document.getElementById('o-img').src = "svg/scissors.svg";
    document.getElementById('result').innerHTML = "You win.";
    ++wins;
  } else if (oChoice === 3 && pChoice === "paper")  {
    document.getElementById('o-img').src = "svg/scissors.svg";
    document.getElementById('result').innerHTML = "You lose.";
    ++losses;
  } else {
    document.getElementById('o-img').src = "svg/scissors.svg";
    document.getElementById('result').innerHTML = "Tie.";
    ++ties;
  }
  sessionStorage.setItem("winCount", wins);
  sessionStorage.setItem("tieCount", ties);
  sessionStorage.setItem("lossCount", losses);
  document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
  document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
  document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
}, 200);
}
function reset() {
  sessionStorage.setItem("winCount", 0);
  sessionStorage.setItem("tieCount", 0);
  sessionStorage.setItem("lossCount", 0);
  document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
  document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
  document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
  document.getElementById('o-img').src = "svg/mystery.svg";
  document.getElementById('result').innerHTML = "Result";
}
