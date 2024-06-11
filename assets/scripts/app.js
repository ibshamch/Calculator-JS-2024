const defaultValue = 0;
let currentResult = defaultValue;

function getUserInput() {
  return parseInt(userInput.value);
}

function writeAndOutputDescription(operator, prevResult, enteredNumber) {
  const resultDescription = `${prevResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, resultDescription);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  writeAndOutputDescription("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  writeAndOutputDescription("-", initialResult, enteredNumber);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  writeAndOutputDescription("*", initialResult, enteredNumber);
}
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  writeAndOutputDescription("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
