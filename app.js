import("./Calculator.js");
const calc = new Calculator();

let ans = document.querySelector(".ans");
let equal = document.querySelector(".equal");
let operater = document.querySelectorAll(".operators .operater");
let eg = document.querySelectorAll(".eg");
let expression = document.querySelector(".expression");
let clear = document.querySelector(".clear");
let backSpace = document.querySelector(".delete");
let equalButtonLocked = true;
let result = 0;
let input = "";

for (operaterChild of operater) {
  operaterChild.addEventListener("click", updateCurrentFunction);
}

for (egChild of eg) {
  egChild.addEventListener("click", updateCurrentInput);
  egChild.addEventListener("click", showInput);
}

function showInput() {
  ans.innerHTML = input;
}

function updateCurrentInput(e) {
  equalButtonLocked = true;
  //   if (input.length != 0) {
  //   }
  input = input + e.target.innerText;
  console.log(input);
}

function updateCurrentFunction(e) {
  calc.updateCurrentFunction(e.target.innerText);
  let inputToBeGiven = parseFloat(input);
  if (calc.currentValue == undefined) {
    calc.operations(inputToBeGiven);
  }
  input = "";
  
}

function updateAnsDom() {
  if (calc.currentValue != undefined) {
    result = calc.operations(parseFloat(input));
  }
  ans.innerHTML = result;
  input = `${result}`;
  console.log(result);
}

function updateExpressionDom() {
  input = "";
  if (equalButtonLocked === true) {
    expression.innerHTML = calc.makeExpression();
    equalButtonLocked = false;
  }
}

function clearDom() {
  calc.clear();
  ans.innerHTML = "00";
  expression.innerHTML = "";
  input = "";
}

clear.addEventListener("click", clearDom);

equal.addEventListener("click", updateAnsDom);
equal.addEventListener("click", updateExpressionDom);

backSpace.addEventListener("click", () => {
  if (calc.currentValue == undefined) {
    calc.clear();
  }
  calc.currentValue.pop;
  calc.history.pop;
});

console.log(calc.currentValue);
console.log(calc.currentFunction);
console.log(calc.ans);
