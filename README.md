## Basics

Variable
Operator
Operator Precedence
Types of values
Understanding the outputResult()
How is javascript executed (top to bottom)
using constant
opening closing '' '' should be same
quotes inside quotes "'' ''"
string concatination
string priority while working with numbers
backtiks `` with template literals (multi-lines)
escape characters \

## Till this everything was hardcoded

Functions -> code on demand , only run some function when something happens , looking at outputResult Function ,
adding a custom function add
function placement ( below variable or at the end of file )
variables automatically declared for the functions
returning values

## Order Matter of declaration :

1- Declare variable before using them (Order Matter)
2- For function it is different , Javascript actually reads whole script first and automatically takes functions to the top before execution
3- You can declare function at the very bottom or just the way you like below variables

## Local vs Global Scope :

Variable declared outside functions are global (are available to functions as well but can cause side Effects)
Variable declared in functions are local or block scoped variables (not available to outside world other than function)

## More on function :

Only return gives back value from function
Nothing executes after return in function
You may return nothing
you cannot return more than one thing from a function

## Converting types:

ParseInt for converting string to number.
toString for converting number to string
++userInput.value

## Spitting code into functions:

Add dynamic Description right into the function
avoiding repeatation by custom variable name
additional function that return parseInt(userInput) and then it is attatched to custom variable in add() function.
Connecting all buttons to function and more code refactor

## Working with comments

// & /\*\*/
Write concise short comments, not essays

## Short-Cut Operators :

currentResult = currentResult + enteredNumber
same as
currentResult += enteredNumber
+=
-=
\*=
/=
++currentResult && currentResult++ pre and post
--currentResult && currentResult-- pre and post

## More types

Boolean
Object
Array

## Accessing array :

array[0] or array [index]

## Implementing operation tracking using arrays and objects

logEnteries.push({})
const logEntry = {
operation: "ADD",
enteredNumber,
previousResult: initialResult,
finalResult: currentResult,
}
logEnteries.push(logEntry);

## Accessing Objects :

Object.key
Ibsham.name

- You can also access function and array every data type you could imagine can be stored in objects.

## Making logEntry Dynamic by creating function

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

## NAN vs Undefined & Null

Nan is a value
Undefined and null are types

## typeof

used to check the type of value

## Correctly importing scripts with defer and async

defer -> download scripts side by side but do not block the parsing of html and executes script after html is fully loaded
async -> download scripts side by side but do not block the parsing of html and executes script right when downloaded even if html is not loaded fully (async order of execution is not guranteed)
