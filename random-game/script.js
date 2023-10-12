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

const imageList = [...images, ...images];

// создаем игровое поле

function createBoardGame() {
  let imageCount = imageList.length;

  for (let i = 0; i < imageCount; i++) {
    let randomIndex = Math.floor(Math.random() * imageList.length);
    let image = imageList[randomIndex];

    const newCard = createCard(image);
    imageList.splice(randomIndex, 1);
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

  this.classList.add('flip');

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

// функция сравнения карточек
function matchCards() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    lockBoard = true;
    resetCard();
  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetCard();
    }, 1000);
  }
}
// let time = 0;
// const timer = document.querySelector('.timer');
// const setTimerGame = setInterval(function () {
//   timer.textContent = `Timer: ${(time += 1)}`;
// }, 1000);

// setTimerGame();

// сброс сравниваемых карточек
function resetCard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

const allCards = document.querySelectorAll('.tile');
allCards.forEach((elem) => elem.addEventListener('click', flipCard));
