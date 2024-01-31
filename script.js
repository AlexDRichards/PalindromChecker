// /^[a-zA-Z]+$/

// VARIABLES

const form = document.getElementById("form");
const textInput = document.getElementById('text-input')
const log = document.getElementById("log");

// FUNCTIONS

function cleanString(input) {
  return input.replace(/[ \/\\_.|&;$%@"<>()+,-]/g, "").toLowerCase();
}

function checkSingleLetter(input) {
  // console.log(input)
  return input.length === 1; 
}

function checkMultiLetter(input) {
  // console.log(input)
  if (input.length < 2) {
    return false;
  }

  let reversedStringArray = [];
  stringArray = input.split('');
  stringArray.forEach(element => {
    reversedStringArray.unshift(element);
  });
  console.log(reversedStringArray.join())
  return stringArray.join('') === reversedStringArray.join('');
}

function logSubmit(event) {
  let clnString = cleanString(textInput.value);
  console.log(clnString);
  console.log(checkSingleLetter(clnString));
  console.log(checkMultiLetter(clnString));
  if (checkSingleLetter(clnString)) {
    log.innerHTML = `${textInput.value} is a palindrome`;
  }

  if (checkMultiLetter(clnString)) {
    log.innerHTML = `${textInput.value} is a palindrome`;
  } else {
    log.innerHTML =`${textInput.value} is not a palindrome`;
  }

  event.preventDefault();
}


form.addEventListener("submit", logSubmit);