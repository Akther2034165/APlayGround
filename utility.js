function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBgColor(elementId) {
  const key = document.getElementById(elementId);
  key.classList.add("bg-orange-400");
  key.classList.add("text-white");
}

function removeBgColor(elementId) {
  const key = document.getElementById(elementId);
  key.classList.remove("bg-orange-400");
  key.classList.remove("text-white");
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  //   console.log(alphabet);

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  //   console.log(index);

  const alphabet = alphabets[index];
  //   console.log(index, alphabet);
  return alphabet;
}

// current score, life extract
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const elementValue = parseInt(elementValueText);
  return elementValue;
}

// set new score, life
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// get text element
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}
