let dict = ['test', 'word', 'letter', 'space', 'stars'];
let selectedLettersCorrect = [];
const img = document.createElement('img');
let correctCounter = 0;
let wrongCounter = 0;
let textDir = './assets/txt/dict.txt';
const imgDirBody = './assets/img/bodyParts/';

let selectedWord = dict
  .sort(function () {
    return 0.5 - Math.random();
  })
  .pop()
  .toUpperCase()
  .split('');

console.log(selectedWord.join(''));

function buttonWrong(objButton) {
  document.getElementById(objButton.id).setAttribute('disabled', true);
  document.getElementById(objButton.id).classList.add('btn-danger');
  if (wrongCounter === 0) {
    document.getElementById('newGamePic').remove();
    wrongCounter++;
  }
  if (wrongCounter === 1) {
    img.setAttribute('src', imgDirBody + 'wrong1.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
  }
  if (wrongCounter === 2) {
    img.setAttribute('src', imgDirBody + 'wrong2.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
  }
  if (wrongCounter === 3) {
    img.setAttribute('src', imgDirBody + 'wrong3.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
  }
  if (wrongCounter === 4) {
    img.setAttribute('src', imgDirBody + 'wrong4.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
  }
  if (wrongCounter === 5) {
    img.setAttribute('src', imgDirBody + 'wrong5.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
  }
  if (wrongCounter === 6) {
    img.setAttribute('src', imgDirBody + 'wrong6.png');
    img.setAttribute('id', 'gamePiece');
    document.getElementById('gamePic').append(img);
    alert('The correct answer was: ' + selectedWord.join(''));
  }
  wrongCounter++;
}

function buttonCorrect(objButton) {
  document.getElementById(objButton.value).setAttribute('disabled', true);
  document.getElementById(objButton.value).classList.add('btn-success');
  selectedLettersCorrect += objButton.value;
  console.log(selectedLettersCorrect);
}

function buttonValue(objButton) {
  if (selectedWord.includes(objButton.value)) {
    buttonCorrect(objButton);
  } else {
    buttonWrong(objButton);
  }
}

function victory() {
  // document.getElementById('newGamePic').remove();
  document.getElementById('gamePiece').remove();
  img.setAttribute('src', imgDirBody + 'youWin.png');
  document.getElementById('gamePic').append(img);
  console.log(objButton);
}
