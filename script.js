const btn = document.querySelector('#btn');
const restart = document.querySelector('#restart');
const inputEarnings = document.querySelector("#earnings");
const inputExpenses = document.querySelector("#expenses");
const pResult = document.querySelector('.result');

btn.addEventListener("click", calcularEndeudamiento);
restart.addEventListener("click", reset);


function calcularEndeudamiento() {
    // event.preventDefault();
  let earnings = Number(inputEarnings.value);
  let expenses = Number(inputExpenses.value);
  if ((earnings<0 || expenses < 0) || (!earnings || !expenses)) {
    pResult.innerText = "Llena los campos";
    return;
  } else {
    const total = Math.round((earnings - expenses) * 0.35);

    pResult.innerText = "Capacidad de endeudamiento es: $" + total;
    console.log(total);
  }
}
function reset() {
  pResult.innerText = "";
  inputEarnings.value = "";
  inputExpenses.value = "";
 }
