const audioFlip = document.querySelector('.flip_sound'),
  audioMistake = document.querySelector('.mistake_sound'),
  audioWin = document.querySelector('.win_sound'),
  audioWinLevel = document.querySelector('.win_level_sound');

const images = [
  'friends',
  'friends10',
  'friends9',
  'friends5',
  'friends6',
  'friends7',
  'friends8',
  'friends3',
  'friends4',
];

const container = document.querySelector('.container');

// создаем игровое поле

function createBoardGame() {
  const list = [...images, ...images];
  let imageCount = list.length;

  for (let i = 0; i < imageCount; i++) {
    let randomIndex = Math.floor(Math.random() * list.length);
    let image = list[randomIndex];

    createCard(image);
    list.splice(randomIndex, 1);
  }
}

// функция создания карточки
function createCard(image) {
  const newBlock = document.createElement('div');
  newBlock.classList.add('tile');
  newBlock.setAttribute('data-image', image);
  container.appendChild(newBlock);

  const faceCard = document.createElement('img');
  faceCard.src = `asserts/img/${image}.jpg`;
  faceCard.classList.add('front__face');

  const backCard = document.createElement('img');
  backCard.src = 'asserts/img/back_face.jpg';
  backCard.classList.add('back__face');

  newBlock.appendChild(faceCard);
  newBlock.appendChild(backCard);

  return newBlock;
}

createBoardGame();

// счетчик
const score = document.querySelector('.score');
let scoreResult = 0;

// сброс сравнения
let open = false;
let lockBoard = false;
let firstCard, secondCard;

// переворот карточки
function flipCard() {
  if (lockBoard) return;

  if (this === firstCard) return;

  this.classList.add('flip');
  audioFlip.play();

  if (!open) {
    firstCard = this;
    open = true;
    return;
  }

  secondCard = this;
  open = false;

  matchCards();
  scoreResult += 1;
  score.textContent = `Score: ${scoreResult}`;
}

// закрытие модального окна
const modal = document.querySelector('.modal');
const button = document.querySelector('.button');
const modalAudio = document.querySelector('.modal__audio');
const buttonMute = document.querySelector('.play');
const modalWin = document.querySelector('.modal__win');

modal.classList.add('open');
modalAudio.play();

let myInterval;

button.addEventListener('click', () => {
  modal.classList.remove('open');
  modalAudio.pause();
  myInterval = setInterval(setTimerGame, 1000);
});

// выключение звука
buttonMute.addEventListener('click', () => {
  buttonMute.classList.toggle('mute');
  if (buttonMute.classList.contains('mute')) {
    modalAudio.pause();
  } else {
    modalAudio.play();
  }
});

// функция сравнения карточек
let countOpenCard = 0;
function matchCards() {
  if (
    firstCard &&
    secondCard &&
    firstCard.dataset.image === secondCard.dataset.image
  ) {
    lockBoard = true;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    audioWin.play();
    countOpenCard += 1;

    resetCard();
    if (countOpenCard == 9) {
      audioWinLevel.play();
      modalWin.classList.add('open');
      clearTimeout(myInterval);
      finalTime.textContent = `Time: ${finalMinute}:${finalSecond}`;
      finalScore.textContent = `Score: ${scoreResult + 1}`;
      let newUser = new UserResult();
      arrUsers.push(newUser);
      localStorage.setItem('users-result', JSON.stringify(arrUsers));
    }
  } else if (firstCard && secondCard) {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      audioMistake.play();
      resetCard();
    }, 1000);
  }
}

// сброс сравниваемых карточек
function resetCard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

const allCards = document.querySelectorAll('.tile');
allCards.forEach((elem) => elem.addEventListener('click', flipCard));

// счетчик времени
let seconds = 0;
let minutes = 0;
const timer = document.querySelector('.timer');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const finalScore = document.querySelector('.final__score');
const finalTime = document.querySelector('.final__time');
let finalMinute, finalSecond;

// вывод времени
function setTimerGame() {
  seconds += 1;
  if (seconds < 10) {
    second.textContent = `0${seconds}`;
  }
  if (seconds >= 10 && seconds < 60) {
    second.textContent = `${seconds}`;
  }
  if (seconds == 60) {
    second.textContent = `00`;
    seconds = 0;
    minutes += 1;
  }
  if (minutes < 10) {
    minute.textContent = `0${minutes}`;
  }
  if (minutes >= 10 && minutes < 60) {
    minute.textContent = `${minutes}`;
  }
  finalMinute = minutes;
  finalSecond = seconds;
}

if (finalMinute < 10) {
  finalMinute = `0${finalMinute}`;
}

if (finalMinute == 0) {
  finalMinute = '00';
}

if (finalSecond < 10) {
  finalSecond = `0${finalSecond}`;
}

let arrUsers = [];
const btnPlayAgain = document.querySelector('.play__again');

let data = localStorage.getItem('users-result');
if (data !== '' && data !== null) {
  arrUsers = JSON.parse(data);
}

function UserResult() {
  this.number = arrUsers.length + 1;
  this.time = `${finalMinute}:${finalSecond}`;
  this.score = scoreResult + 1;
}

// играть опять
btnPlayAgain.addEventListener('click', () => {
  let newAllCards = document.querySelectorAll('.tile');
  newAllCards.forEach((elem) => {
    elem.remove();
  });
  refreshGame(allCards);
});

// запуск новой игры
function refreshGame(cards) {
  modalWin.classList.remove('open');

  cards.forEach((elem) => {
    elem.remove();
  });

  countOpenCard = 0;
  scoreResult = 0;
  minutes = 0;
  seconds = 0;
  minute.textContent = '00';
  second.textContent = '00';
  score.textContent = `Score: ${scoreResult}`;

  createBoardGame();
  let newAllCards = document.querySelectorAll('.tile');
  newAllCards.forEach((elem) => elem.addEventListener('click', flipCard));

  matchCards();

  myInterval = setInterval(setTimerGame, 1000);
}
