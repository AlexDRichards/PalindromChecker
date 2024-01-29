// VARIABLES

positiveResult = document.getElementById('result-positive');

let userInput;

function checkForPalindrome() {
    userInput = document.getElementById('text-input').value
    console.log(userInput.length)
    positiveResult.style.display = 'block';
}

function printWord() {
    console.log(userInput)
}