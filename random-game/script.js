const images = [
  'friend',
  'friend1',
  'friend2',
  'friend3',
  'friend4',
  'friend5',
  'friend6',
  'friend7',
  'friend9',
];

const imageList = [...images, ...images];

// const tilesCount = imageList.length;

// let revealCount = 0;
// let activeTile = null;
// let moving = false;

// for (let i = 0; i < imageList.length; i++) {
//   const randomIndex = Math.floor(Math.random() * imageList.length);
//   const imageNew = imageList[randomIndex];

//   imageList.splice(randomIndex, 1);
//   console.log(imageNew);
// }

// // console.log(imageList);

// const container = document.querySelector('.container');

// Переворот карточек
const tiles = document.querySelectorAll('.tile');

function tileFlip() {
  this.classList.toggle('flip');
}

tiles.forEach((elem) => {
  elem.addEventListener('click', tileFlip);
});
