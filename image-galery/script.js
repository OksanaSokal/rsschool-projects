const url =
  'https://api.unsplash.com/search/photos?query=monochromatic&client_id=ExzoYddcdJAlyvSfzzfD9onYq9zVqp77J7iQY4-lvfA';
const container = document.querySelector('.container');

function showImage(address) {
  image.src = `${address}`;
}
console.log(image);

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  showImage();
}
getData();

function createImage() {
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = ``;
  img.alt = 'image';
  container.append(img);
}
