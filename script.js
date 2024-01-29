console.log(document.getElementById('userInput'))

function logSubmit(event) {
//   log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  console.log(document.getElementById('userInput').value)
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);