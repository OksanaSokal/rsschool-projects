const container = document.querySelector('.container'),
  input = document.querySelector('.header__input'),
  form = document.querySelector('form');

const apiKey = 'ExzoYddcdJAlyvSfzzfD9onYq9zVqp77J7iQY4-lvfA';

// const url = `https://api.unsplash.com/photos/?per_page=15&client_id=${apiKey}`;
const url = `https://api.unsplash.com/search/photos?query=monochrome&per_page=15&client_id=${apiKey}`;

// const url = `https://api.unsplash.com/search/photos?query=${request}&per_page=15&client_id=${apiKey}`;

getData(url);

async function getData(dataLink) {
  const res = await fetch(dataLink);
  const data = await res.json();
  console.log(data);

  const newData = data.results;

  newData.map((item) => {
    createImage(item.urls.regular);
  });
}

function createImage(address) {
  const div = document.createElement('div');
  const img = document.createElement('img');

  div.classList.add('box__image');
  img.classList.add('gallery__image');
  img.src = `${address}`;
  img.alt = 'image';
  div.append(img);
  container.append(div);
}

// async function getDataSearch() {
//   const res = await fetch(searchUrl);
//   const data = await res.json();
//   console.log(data);

//   data.map((item) => {

//     createImage(item.regulars.urls.regular);
//   });
// }

form.addEventListener('submit', (elem) => {
  elem.preventDefault();

  let request = input.value;
  const searchUrl = `https://api.unsplash.com/search/photos?per_page=15&query=${request}&client_id=${apiKey}`;

  if (input.value) {
    container.innerHTML = '';
    getData(searchUrl);
  }
});

const searchBtn = document.querySelector('.button');

searchBtn.addEventListener('click', () => {
  elem.preventDefault();

  let request = input.value;
  const searchUrl = `https://api.unsplash.com/search/photos?per_page=15&query=${request}&client_id=${apiKey}`;

  if (input.value) {
    container.innerHTML = '';
    getData(searchUrl);
  }
});
