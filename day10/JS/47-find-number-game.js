let numberInput = document.getElementById("num");
let startButton = document.querySelector(".btn-start");
let guessButton = document.querySelector(".btn-guess");
let result = document.querySelector("#result");
let randomNumber;

const createRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;



const startGame = () => {
  randomNumber = createRandomNumber(1, 100);
  console.log(randomNumber);
  startButton.style.display = "none";
  numberInput.style.display = "inline";
  guessButton.style.display = "inline";
};
const guessNumber = () => {
  let num = numberInput.value;

  if (num >= 1 && num <= 100) {
    if (num > randomNumber) {
      result.innerHTML =
        "You have entered a number greater than the random number";
    } else if (num < randomNumber) {
      result.innerHTML =
        "You have entered a number less than the random number";
    } else {
      result.innerHTML = "You have guessed the correct number " + randomNumber;
    }
    numberInput.value = "";
    numberInput.focus();
  } else {
    result.innerHTML = "Please enter a number between 1 and 100";
  }
};
