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
  result.innerHTML = "";
};
const guessNumber = () => {
  let num = Number(numberInput.value);

  if (num >= 1 && num <= 100 && Number.isInteger(num)) {
    if (num > randomNumber) {
      result.innerHTML =
        "You have entered a number greater than the random number";
    } else if (num < randomNumber) {
      result.innerHTML =
        "You have entered a number less than the random number";
    } else {
      result.innerHTML = "You have guessed the correct number " + randomNumber;
      startButton.style.display = "inline";
      numberInput.style.display = "none";
      guessButton.style.display = "none";
    }
    numberInput.value = "";
    numberInput.focus();
  } else {
    result.innerHTML = "Please enter a number between 1 and 100";
  }
};
