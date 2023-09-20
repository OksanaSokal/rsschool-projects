const audio = document.querySelector('.audio'),
  container = document.querySelector('.container'),
  background = document.querySelector('.background'),
  backgroundPlayer = document.querySelector('.background-player'),
  singer = document.querySelector('.singer'),
  song = document.querySelector('.song'),
  playBtn = document.querySelector('.play-pause'),
  prevBtn = document.querySelector('.backward'),
  nextBtn = document.querySelector('.forward'),
  progressContainer = document.querySelector('.progress-container'),
  progress = document.querySelector('.progress'),
  durationSong = document.querySelector('.duration'),
  changeImage = document.querySelector('.background-player');

const songsList = ['Kape Fear', "You've Got the Love", 'Mountain at My Gates'];
const singerList = ['Elder Island', 'Florens + The Machine', 'Foals'];
const srcSong = [
  'elder_Island-Kape_Fear',
  'Florence_The_Machine-Youve_Got_the_Love',
  'Foals_-_Mountain_at_My_Gates',
];

let songIndex = 0;

// внешний вид при загрузке
function loadSong(elem) {
  singer.textContent = elem;
  song.textContent = singerList[songIndex];
  audio.src = `assets/audio/${srcSong[songIndex]}.mp3`;
  backgroundPlayer.src = `assets/img/${srcSong[songIndex]}.jpg`;
  background.src = `assets/img/${srcSong[songIndex]}.jpg`;
  audio.onloadeddata = () => {
    const minutes = Math.floor(audio.duration / 60);

    const seconds = Math.floor(audio.duration % 60);

    durationSong.textContent = `${minutes}:${seconds}`;
  };
}

loadSong(songsList[songIndex]);

// функции play pause

function audioPlay() {
  container.classList.add('play');
  audio.play();
}

function audioPause() {
  container.classList.remove('play');
  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlay = container.classList.contains('play');
  if (isPlay) {
    audioPause();
  } else {
    audioPlay();
  }
});

//  функция следующей песни
function nextSong() {
  songIndex++;

  if (songIndex > songsList.length - 1) {
    songIndex = 0;
  }
  loadSong(songsList[songIndex]);
  audioPlay();
}

nextBtn.addEventListener('click', () => {
  nextSong();
});

//  функция предыдущей песни

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = singerList.length - 1;
  }
  loadSong(songsList[songIndex]);
  audioPlay();
}

prevBtn.addEventListener('click', () => {
  prevSong();
});

// Изменение кнопки play/pause
function toggleBtn() {
  playBtn.classList.toggle('pause-img');
  changeImage.classList.toggle('change');
}
playBtn.addEventListener('click', toggleBtn);

// Загрузка прогрессбара

function loadProgreess(elem) {
  const { duration, currentTime } = elem.target;
  const progressPersent = (currentTime / duration) * 100;
  progress.style.width = `${progressPersent}%`;
}

audio.addEventListener('timeupdate', loadProgreess);

// изменение прогрессбаза по клику

function setProgress(elem) {
  const width = this.clientWidth;
  const clickX = elem.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

// включение след песни после предыдущей

audio.addEventListener('ended', nextSong);

// установка текущего времени проигрывания

const currentTimeSong = document.querySelector('.current-time');

function updateTime() {
  let minutes = Math.floor(audio.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  currentTimeSong.textContent = `${minutes}:${seconds}`;
}

audio.addEventListener('timeupdate', updateTime);
