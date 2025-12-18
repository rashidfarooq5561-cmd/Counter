let num = document.getElementById("num");
let counterNumber = 1;

function add() {
  ++counterNumber;
  num.innerHTML = counterNumber;
}
function minus() {
  if (counterNumber > 0) {
    --counterNumber;
    num.innerHTML = counterNumber;
  } 
}
function reset() {
  counterNumber = 0;
  num.innerHTML = counterNumber;
}