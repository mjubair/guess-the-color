// write a function to generate random numbers between 0 to 255
// write a function to generate random rgb color

const generateRandomNumber = (value) => Math.floor(Math.random() * value);
const generateRandomRGB = () => {
  const red = generateRandomNumber(256);
  const green = generateRandomNumber(256);
  const blue = generateRandomNumber(256);

  return {
    values: [red, green, blue],
    rgb: `rgb(${red}, ${green}, ${blue})`,
  };
};

let selectedColor = '';
let totalGuesses = 0;
let correctGuesses = 0;
let numberOfOptions = 6;

const gamePad = document.querySelector('#game-pad');
const gameColor = document.querySelector('#game-color');
const totalGuessesElement = document.getElementById('total');
const correctGuessesElement = document.getElementById('score');

// write a function to generate random generate complimentary colors and store them in an array

const init = (numberOfOptions) => {
    correctGuessesElement.style.transform = 'scale(1)';
    totalGuessesElement.style.transform = 'scale(1)';
  const colors = Array(numberOfOptions)
    .fill('')
    .map(() => generateRandomRGB());
    console.log(colors);
  selectedColor = colors[generateRandomNumber(numberOfOptions)];
  console.log(selectedColor);
  gamePad.innerHTML = '';
gameColor.innerHTML = '';
  totalGuessesElement.innerText =  '👎 ' + (totalGuesses - correctGuesses);
  correctGuessesElement.innerText = correctGuesses + ' 👍';
  const letters = ['R', 'G', 'B'];
  for (i = 0; i < 3; i++) {
    const div = document.createElement('div');
    const divText = document.createElement('div');

    const c = Array(3).fill(0);
    c[i] = selectedColor.values[i];
    div.style.backgroundColor = `rgb(${c[0]}, ${c[1]}, ${c[2]}`;
    div.appendChild(divText);
    divText.innerText = `${letters[i]} - ${selectedColor.values[i]}`;
    gameColor.appendChild(div);
  }

  colors.forEach((color) => {
    const button = document.createElement('button');
    button.style.backgroundColor = color.rgb;
    gamePad.appendChild(button);
  });
};

gamePad.addEventListener('click', (event) => {
  console.log(selectedColor === event.target.style.backgroundColor);
  if (event.target.style.backgroundColor === selectedColor.rgb) {
    totalGuesses++;
    correctGuesses++;
    correctGuessesElement.style.transform = 'scale(2)';
    init(numberOfOptions);
  } else {
    totalGuesses++;
    init(numberOfOptions);
  }
});

init(numberOfOptions);
