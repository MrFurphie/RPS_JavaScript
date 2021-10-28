
function play() {
  let cPick = "?";
  let msg = Math.floor(Math.random() * 3 + 1);
  function set() {
  if (msg == 1){
    let cPick = "rock";
  } else if (msg == 2) {
    let cPick = "paper";
  } else if (msg == 3){
    let cPick = "scissors";
  }
};
  set();
  document.getElementById('result').innerHTML = cPick;
}
