const defaultValue = 0;
let currentResult = defaultValue;
let logEnteries = [];
function getUserInput() {
  return parseInt(userInput.value);
}

function writeAndOutputDescription(operator, prevResult, enteredNumber) {
  const resultDescription = `${prevResult} ${operator} ${enteredNumber}`;
  outputResult(currentResult, resultDescription);
}

function writeToLog(previousResult, operation, enteredNumber, newResult) {
  const logEntry = {
    previousResult,
    operation,
    enteredNumber,
    finalResult: newResult,
  };
  logEnteries.push(logEntry);
  console.log(logEnteries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  writeAndOutputDescription("+", initialResult, enteredNumber);
  writeToLog(initialResult, "ADD", enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeAndOutputDescription("-", initialResult, enteredNumber);
  writeToLog(initialResult, "SUBTRACT", enteredNumber, currentResult);
}
function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeAndOutputDescription("*", initialResult, enteredNumber);
  writeToLog(initialResult, "MULTIPLY", enteredNumber, currentResult);
}
function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= currentResult / enteredNumber;
  writeAndOutputDescription("/", initialResult, enteredNumber);
  writeToLog(initialResult, "DIVIDE", enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
