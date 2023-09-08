/**let offset = 0; //смещение блока слева
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.btn__right').addEventListener('click', function() {
    offset = offset + 475;
    if (offset > 950) {
        offset = 950;
    }
    sliderLine.style.left = - offset + 'px';
});


document.querySelector('.about__btn').addEventListener('click', function() {
    offset = offset - 475;
    if (offset < 0) {
        offset = 0;
    }
    sliderLine.style.left = - offset + 'px';
});
рабочее решение**/

/** 
const btnBej = document.getElementsByClassName('about__btn__link');

document.querySelector('.about__btn').addEventListener('click', function() {
    btnBej.style.backgroundColor = 'red';
});


document.querySelector('.about__btn').addEventListener('click',function() {
    this.classList.toggle('active');
    document.querySelector('.about__btn__link').classList.toggle('active');
});**/

// слайдер about
const sliderImages = document.querySelectorAll('.about__photo'),
  sliderImage = document.querySelector('.about__photo'),
  sliderLine = document.querySelector('.slider__line'),
  sliderDots = document.querySelectorAll('.about__btn__link'),
  sliderBtnNext = document.querySelector('.about__btn-right'),
  sliderBtnPrev = document.querySelector('.about__btn-left');

let sliderCount = 0;
let sliderWidth;

// адаптивность слайдера
// window.addEventListener('resize', showSlide);

//кнопки листания слайдера вперед и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function showSlide() {
  sliderWidth = document.querySelector('.about__wrap').offsetWidth;
  sliderLine.style.width = sliderImage * sliderImages.length + 'px';
  sliderImages.forEach((item) => (item.style.width = sliderWidth + 'px'));

  rollSlider();
}
showSlide();

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = sliderImages.length - 1;

  rollSlider();
  thisSlide(sliderCount);
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * 475}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

//  FADEIN FADEOUT в favorites

const fadeIn = (el, timeout) => {
  el.style.opacity = 0;
  el.style.display = 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

// // мои варианты

const winter = document.querySelector('.winter');
const spring = document.querySelector('.spring');
const summer = document.querySelector('.summer');
const autumn = document.querySelector('.autumn');

const btnWinter = document.getElementById('winter');
const btnSpring = document.getElementById('spring');
const btnSummer = document.getElementById('summer');
const btnAutumn = document.getElementById('autumn');

// const seasonBlock = document.querySelectorAll('.favorites__wrap');
// const btnBlock = document.querySelectorAll('.real-radio-btn');

// btnWinter.addEventListener('click', function () {
//   winter.classList.add('fade_in');
//   winter.style.display = 'block';
//   summer.style.display = 'none';
//   autumn.style.display = 'none';
//   spring.style.display = 'none';
// });

// btnSpring.addEventListener('click', function () {
//   spring.classList.add('fade_in');
//   spring.style.display = 'block';
//   summer.style.display = 'none';
//   autumn.style.display = 'none';
//   winter.style.display = 'none';
// });

// btnSummer.addEventListener('click', function () {
//   summer.classList.add('fade_in');
//   summer.style.display = 'block';
//   spring.style.display = 'none';
//   autumn.style.display = 'none';
//   winter.style.display = 'none';
// });

// btnAutumn.addEventListener('click', function () {
//   autumn.classList.add('fade_in');
//   autumn.style.display = 'block';
//   spring.style.display = 'none';
//   summer.style.display = 'none';
//   winter.style.display = 'none';
// });

// else

btnWinter.addEventListener('click', (e) => {
  let display = winter.style.display;
  if (display == 'none') {
    fadeIn(winter, 2000);
    spring.style.display = 'none';
    summer.style.display = 'none';
    autumn.style.display = 'none';
  } else {
    fadeOut(winter, 2000);
  }
});

btnSpring.addEventListener('click', (e) => {
  let display = spring.style.display;
  if (display == 'none') {
    fadeIn(spring, 2000);
    winter.style.display = 'none';
    summer.style.display = 'none';
    autumn.style.display = 'none';
  } else {
    fadeOut(spring, 2000);
  }
});

btnSummer.addEventListener('click', (e) => {
  let display = summer.style.display;
  if (display == 'none') {
    fadeIn(summer, 2000);
    winter.style.display = 'none';
    spring.style.display = 'none';
    autumn.style.display = 'none';
  } else {
    fadeOut(summer, 2000);
  }
});

btnAutumn.addEventListener('click', (e) => {
  let display = autumn.style.display;
  if (display == 'none') {
    fadeIn(autumn, 2000);
    winter.style.display = 'none';
    summer.style.display = 'none';
    spring.style.display = 'none';
  } else {
    fadeOut(autumn, 2000);
  }
});

//первое модальное окно

const iconBtn = document.getElementById('open__modal-btn');

iconBtn.addEventListener('click', function () {
  document.getElementById('my__modal').classList.add('open');
  document.getElementById('registration').style.display = 'none';
  document.querySelector('.modal__box').style.display = 'block';
});

document
  .querySelector('#my__modal .modal__box')
  .addEventListener('click', (event) => {
    event._isClickWithInModal = true;
  });

document.getElementById('my__modal').addEventListener('click', (event) => {
  if (event._isClickWithInModalReg) return;
  if (event._isClickWithInModal) return;
  if (event._isClickWithInModalProf) return;
  if (event._isClickWithInModalCard) return;
  event.currentTarget.classList.remove('open');
});

//окно регистрации

const regBtn = document.getElementById('open__registr-btn');

//открытие по строке registration
regBtn.addEventListener('click', function () {
  document.getElementById('registration').classList.add('open_reg');
  document.getElementById('registration').style.display = 'block';
  document.querySelector('.modal__box').style.display = 'none';
});

const regOpenSignUp = document.getElementById('card_get_btn');
//открытие по кнопке sign up
regOpenSignUp.addEventListener('click', function () {
  console.log('true');
  document.getElementById('my__modal').classList.add('open');
  document.getElementById('registration').classList.add('open_reg');
  document.getElementById('registration').style.display = 'block';
  document.querySelector('.modal__box').style.display = 'none';
});

document.getElementById('close__modal').addEventListener('click', function () {
  document.getElementById('registration').classList.remove('open_reg');
  document.getElementById('my__modal').classList.remove('open');
});

document
  .querySelector('#my__modal .reg__box')
  .addEventListener('click', (event) => {
    event._isClickWithInModalReg = true;
  });

document.getElementById('registration').addEventListener('click', (event) => {
  if (event._isClickWithInModalReg) return;
  event.currentTarget.classList.remove('open_reg');
});

/////////local storage

let data = localStorage.getItem('usersList');
let usersList = [];

if (data !== '' && data !== null) {
  usersList = JSON.parse(data);
}

const allBuyBnt = document.querySelectorAll('.favorites__btn');

//Функция открытия карты покупки
const buyCardModal = function (btn) {
  document.getElementById('my__modal__buy').classList.add('open__buy');
};

//Функция закрытия карты покупки
document
  .querySelector('.modal__buy-close')
  .addEventListener('click', function () {
    document.getElementById('my__modal__buy').classList.remove('open__buy');
  });

document
  .querySelector('#my__modal__buy .modal__buy__box')
  .addEventListener('click', (event) => {
    event._isClickWithInModalBuy = true;
  });

document.getElementById('my__modal__buy').addEventListener('click', (event) => {
  if (event._isClickWithInModalBuy) return;
  event.currentTarget.classList.remove('open__buy');
});

// запретить перезагрузку при отправке формы
const allForms = document.querySelectorAll('form');

allForms.forEach((elem) => {
  elem.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

//LOGIN открыть
document.querySelector('.login__link').addEventListener('click', function () {
  document.getElementById('modal__log_in').classList.add('open__login');
  document.getElementById('my__modal').classList.remove('open');
});

//LOGIN закрыть
document
  .getElementById('close__login__modal')
  .addEventListener('click', function () {
    document.getElementById('modal__log_in').classList.remove('open__login');
  });

document
  .querySelector('#modal__log_in .modal__login__box')
  .addEventListener('click', (event) => {
    event._isClickWithInModalLogIn = true;
  });

document.getElementById('modal__log_in').addEventListener('click', (event) => {
  if (event._isClickWithInModalLogIn) return;
  event.currentTarget.classList.remove('open__login');
});

//ФУНКЦИИ

//функция создать модал окно profile/logout
const createProfileWindow = function () {
  const profileBtn = document.querySelector('.user__letters');

  profileBtn.addEventListener('click', function () {
    document.getElementById('my__modal').classList.add('open');
    document.getElementById('profile__modal').classList.add('open__prof');
    document.querySelector('.modal__box').style.display = 'none';
    document.querySelector('.modal__reg').style.display = 'none';
    document.querySelector('.modal__card').style.display = 'none';
    document.querySelector('.modal__profile').style.display = 'block';
  });

  document
    .querySelector('#my__modal .profile__box')
    .addEventListener('click', (event) => {
      event._isClickWithInModalProf = true;
    });

  document
    .getElementById('profile__modal')
    .addEventListener('click', (event) => {
      if (event._isClickWithInModalProf) return;
      event.currentTarget.classList.remove('open__prof');
    });
};

// функция создания букв вместо иконки
const createLettersIcon = function (elem) {
  let firstNameUser = elem.firstname;
  let lastNameUser = elem.lastname;

  let userLetters = firstNameUser[0] + lastNameUser[0];

  let lettersBlock = document.createElement('span');
  lettersBlock.classList.add('user__letters');

  lettersBlock.textContent = userLetters;

  document.querySelector('.header-box').append(lettersBlock);
  document.querySelector('.header__img').style.display = 'none';
  lettersBlock.title = `${firstNameUser} ${lastNameUser}`;
};

// функция вставки букв и имени в MY PROFILE CARD
const addLettersInProfileCard = function (elem) {
  let firstNameUser = elem.firstname;
  let lastNameUser = elem.lastname;
  let userLetters = firstNameUser[0] + lastNameUser[0];

  let blockForLetters = document.querySelector('.card__initials');
  blockForLetters.textContent = userLetters;

  let blockForName = document.querySelector('.card__name');
  blockForName.textContent = `${firstNameUser} ${lastNameUser}`;
};

// функция вставки номера карты в MY PROFILE CARD
const addCardNumberInProfileCard = function (elem) {
  let profileNumber = document.querySelector('.profile__number');
  let userNumber = elem.cardnumber;
  profileNumber.textContent = userNumber;

  let profileNumberInCard = document.querySelector('.card__usernumber');
  profileNumberInCard.textContent = userNumber;
};

//функция создания модального окна MY PROFILE CARD
const createCardModal = function () {
  const profileCardBtn = document.querySelector('.profile__link');

  profileCardBtn.addEventListener('click', function () {
    document.getElementById('my__modal').classList.add('open');
    document.getElementById('card__modal').classList.add('open__card');
    document.querySelector('.modal__box').style.display = 'none';
    document.querySelector('.modal__reg').style.display = 'none';
    document.querySelector('.modal__profile').style.display = 'none';
    document.querySelector('.modal__card').style.display = 'flex';
  });

  document
    .getElementById('close__profile__modal')
    .addEventListener('click', function () {
      document.getElementById('card__modal').classList.remove('open__card');
      document.getElementById('my__modal').classList.remove('open');
    });

  document
    .querySelector('#my__modal .card__box')
    .addEventListener('click', (event) => {
      event._isClickWithInModalCard = true;
    });

  document.getElementById('card__modal').addEventListener('click', (event) => {
    if (event._isClickWithInModalCard) return;
    event.currentTarget.classList.remove('open__card');
  });
};

//функция выхода LOGOUT
let logOut = function () {
  const btnLogout = document.querySelector('.logout__link');
  btnLogout.addEventListener('click', function () {
    document.getElementById('my__modal').classList.remove('open');

    let statusUser = localStorage.getItem('user');
    if (statusUser == 'active') {
      localStorage.removeItem('user');
    }
    usersList.forEach((elem) => {
      if ((elem.status = 'active')) {
        elem.status = 'out';
        localStorage.setItem('usersList', JSON.stringify(usersList));
      }
    });
  });
};

//ПОЛЬЗОВАТЕЛЬ ЗАРЕГИСТРИРОВАН
// const userHasActiveStatus = localStorage.getItem('user');
// if (userHasActiveStatus == 'active')
// console.log('yes')

usersList.forEach((item) => {
  if (item.status == 'active') {
    // вставка букв вместо иконки
    createLettersIcon(item);

    //создание модального окна profile/logout
    createProfileWindow();

    //создание модального окна MY PROFILE CARD
    createCardModal();

    //вставка букв и имени в MY PROFILE CARD
    addLettersInProfileCard(item);

    //вставка номера карты в MY PROFILE CARD
    addCardNumberInProfileCard(item);

    //функция скопировать номер карты в буфер обмена
    const btnCopy = document.querySelector('.card__copy');
    btnCopy.onclick = () => {
      navigator.clipboard.writeText(userNumber);
    };

    //функция выхода logout
    logOut();

    //функция нажатие на кнопки buy - открыть модальное окно покупки карты
    const putBtnBuy = allBuyBnt.forEach((elem) => {
      elem.addEventListener('click', function () {
        buyCardModal(elem);
      });
    });
  }
});

if (!localStorage.getItem('user')) {
  let userLettersIcon = document.querySelector('.user__letters');
  if (userLettersIcon) {
    userLettersIcon.remove();
  }

  document.querySelector('.header__img').style.display = 'block';
}

// ДЛЯ АВТОРИЗАЦИИ
// let status = '';
// try {
//   status = localStorage.getItem('status');
// } catch {}
// if (status == 'active') {
//   //активный юзер
//   return
// } else {
//   localStorage.setItem('status', 'active');
// }
//   Создание Юзера

let firstname = document.querySelector('#firstname');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

// let users = {};

function User(firstname, lastname, email, password, cardnumber, status) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.password = password;
  this.cardnumber = cardnumber;
  this.status = status;
}

// function createId(users) {
//     return Object.keys(users).length;
// }

function createCardnumber() {
  let userNumber = Math.round(Math.random() * 10000000000);
  userNumber = userNumber.toString(16);
  userNumber = `F${userNumber.toUpperCase()}`;
  return userNumber;
}

submit.addEventListener('click', function () {
  const firstNameUser = firstname.value;
  const lastNameUser = lastname.value;
  const emailUser = email.value;
  const passwordUser = password.value;
  const cardNumber = createCardnumber();
  const status = 'active';

  const user = new User(
    firstNameUser,
    lastNameUser,
    emailUser,
    passwordUser,
    cardNumber,
    status
  );

  usersList.push(user);

  localStorage.setItem('usersList', JSON.stringify(usersList));
});

//счетчик визитов
let visitCount = 0;

//валидация формы регистрации

function validation(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error__label').remove();
      parent.classList.remove('error');
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error__label');
    errorLabel.textContent = text;

    parent.classList.add('error');
    parent.append(errorLabel);
  }

  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {
    removeError(input);

    if (input.dataset.maxLength) {
      if (input.value.length < input.dataset.maxLength) {
        removeError(input);
        createError(
          input,
          `Минимальное количество символов: ${input.dataset.maxLength}`
        );
        result = false;
      }
    }

    if (input.value == '') {
      removeError(input);
      createError(input, 'Поле не заполнено!');
      result = false;
    }
  }

  return result;
}

document
  .getElementById('add__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this) == true) {
      alert('Регистрация прошла успешно!');

      visitCount = visitCount + 1;
      console.log(visitCount);

      document.querySelector('.card__howmuch__visit').textContent = visitCount;

      localStorage.setItem('user', 'active');
    }
  });

//валидация формы покупки карты

function validationCard(form) {
  function removeErrorCard(input) {
    input.placeholder = '';

    const parent = input.parentNode;

    if (parent.classList.contains('error__block')) {
      parent.querySelector('.error__bank').remove();
      parent.classList.remove('error__block');
    }

    if (parent.classList.contains('error__blockExp')) {
      parent.querySelector('.error__exp').remove();
      parent.classList.remove('error__blockExp');
    }

    if (parent.classList.contains('error__blockCvc')) {
      parent.querySelector('.error__cvc').remove();
      parent.classList.remove('error__blockCvc');
    }
  }

  function createErrorForm(input, text) {
    input.placeholder = text;
  }

  //функция ошибки ввода номера карты банка
  function createErrorBank(input, text) {
    const parent = input.parentNode;
    const errorLabelBank = document.createElement('labelBank');

    errorLabelBank.classList.add('error__bank');
    errorLabelBank.textContent = text;

    parent.classList.add('error__block');

    parent.append(errorLabelBank);
  }

  //функция ошибки ввода срока карты
  function createErrorExp(input, text) {
    const parent = input.parentNode;
    const errorExp = document.createElement('labelExp');

    errorExp.classList.add('error__exp');
    errorExp.textContent = text;

    parent.classList.add('error__blockExp');

    parent.append(errorExp);
  }

  //функция ошибки ввода сvc
  function createErrorCvc(input, text) {
    const parent = input.parentNode;
    const errorCvc = document.createElement('labelCvc');

    errorCvc.classList.add('error__cvc');
    errorCvc.textContent = text;

    parent.classList.add('error__blockCvc');

    parent.append(errorCvc);
  }

  let result = true;

  form.querySelectorAll('input').forEach((input) => {
    removeErrorCard(input);

    if (input.dataset.minLength) {
      removeErrorCard(input);

      if (input.value.length !== 16) {
        createErrorBank(input, 'Поле должно содержать 16 символов');
        result = false;
      }
    }

    if (input.dataset.hasLength) {
      removeErrorCard(input);

      if (input.value.length !== 2) {
        createErrorExp(input, 'Поля должны содержать по 2 символа');
        result = false;
      }
    }

    if (input.dataset.haveLength) {
      removeErrorCard(input);

      if (input.value.length !== 3) {
        createErrorCvc(input, 'Поле должно содержать 3 символа');
        result = false;
      }
    }

    if (input.value == '') {
      createErrorForm(input, 'Заполните поле');
      result = false;
    }
  });

  return result;
}

document
  .getElementById('buy__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (validationCard(this) == true) {
      // alert('успешно')

      localStorage.setItem('liblaryCard', 'active');

      document.getElementById('my__modal__buy').classList.remove('open__buy');

      let booksCount = 0;
      const putBtnBuy = allBuyBnt.forEach((elem) => {
        elem.addEventListener('click', function () {
          elem.textContent = 'Own';
          elem.classList.add('btn__own');
          document.getElementById('my__modal__buy').style.display = 'none';

          if (elem.classList.contains('btn__own')) {
            booksCount = booksCount + 1;
            console.log(booksCount);

            //вставить добавление арендованных книг
            const textElement = document.querySelector('.card__rented__list');
            const newTextElement = document.createElement('li');
            newTextElement.classList.add('rented__list');

            const searchName = elem.closest('.favorites__box');
            const rentedBookName = searchName.querySelector('.favorites__name');
            const rentedBookWriter =
              searchName.querySelector('.favorites__author');

            textElement.append(newTextElement);
            newTextElement.textContent = `${rentedBookName.textContent}, ${rentedBookWriter.textContent}`;
          }

          document.querySelector('.card__howmuch__books').textContent =
            booksCount;
        });
      });
    }
  });

//LOGIN

function validationLogIn(form) {
  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error__login')) {
      parent.querySelector('.error__label__login').remove();
      parent.classList.remove('error__login');
    }
  }

  function createErrorLogIn(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');

    errorLabel.classList.add('error__label__login');
    errorLabel.textContent = text;

    parent.classList.add('error__login');

    parent.append(errorLabel);
  }

  // function createErrorData(input, text) {
  //   const parent = input.parentNode;
  //   const errorLabel = document.createElement('label');

  //   errorLabel.classList.add('error__label__login');
  //   errorLabel.textContent = text;

  //   parent.classList.add('error__login');

  //   parent.append(errorLabel);
  // }

  let result = true;

  const allInputs = form.querySelectorAll('input');

  let userInputData = document.querySelector('.login__data').value;
  let userInputPassword = document.querySelector('.login__password').value;

  let dataInput = true;
  let dataPassword = true;

  usersList.forEach((elem) => {
    if (elem.cardnumber == userInputData || elem.email == userInputData) {
      console.log(elem.cardnumber);
      console.log(userInputData);
      // result = true;
      dataInput = true;
      console.log(dataInput);
    } else {
      dataInput = false;
    }
    if (elem.password == userInputPassword) {
      // result = true;
      dataPassword = true;
      console.log(elem.password);
      console.log(userInputPassword);
      return dataPassword;
    } else {
      dataPassword = false;
      return dataPassword;
    }
  });

  for (const input of allInputs) {
    removeError(input);
    if (input.value == '') {
      createErrorLogIn(input, 'Поле не заполнено');
      result = false;
    }
  }

  for (const input of allInputs) {
    removeError(input);
    if (dataInput == true && dataPassword == true) {
      result = true;
      console.log(result);
    } else {
      createErrorLogIn(input, 'пользователь или пароль не зарегистрирован');
      result = false;
      console.log(result);
    }

    // if (dataPassword == true) {
    //   result = true;
    // } else {
    //   createErrorLogIn(input, 'пользователь или пароль не зарегистрирован');
    //   result = false;
    // }
  }

  return result;
}

document
  .getElementById('login__form')
  .addEventListener('submit', function (event) {
    if (validationLogIn(this) == true) {
      alert('форма проверена');

      // смена статуса на active
      // usersList.forEach((elem) => {
      //   if (elem.cardnumber == userInputData || elem.email == userInputData) {
      //     console.log('true data');
      //   }
      //   if (elem.password == userInputPassword) {
      //     console.log('true password');
      //   }
      //   elem.status = 'active';
      //   localStorage.setItem('usersList', JSON.stringify(usersList));
      // });
    }
  });

// Куплена ли карта

const userHasLibraryCard = '';

try {
  userHasLibraryCard = localStorage.getItem('liblaryCard');
} catch {}

// if (userHasLibraryCard)
