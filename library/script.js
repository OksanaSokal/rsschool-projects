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
    window.addEventListener('resize', showSlide);

//кнопки листания слайдера вперед и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

    function showSlide() {
        sliderWidth = document.querySelector('.about__wrap').offsetWidth;
        sliderLine.style.width = sliderImage * sliderImages.length + 'px';
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

        rollSlider();
    }
        showSlide();
        
    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderImages.length) sliderCount = sliderImages.length -1 ;

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
        sliderDots.forEach(item => item.classList.remove('active-dot'));
        sliderDots[index].classList.add('active-dot');
    }

    sliderDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        })
    })



    //fade in/out в favorites

    const fadeIn = (el, timeout) => {
        el.style.opacity = 0;
        el.style.display =  'block';
        el.style.transition = `opacity ${timeout}ms`;
        setTimeout(() => {
            el.style.opacity = 1;
        },10);
    };

    

    const fadeOut = (el, timeout) => {
        el.style.opacity = 1;
        el.style.transition = `opacity ${timeout}ms`;
        el.style.opacity = 0;

        setTimeout(() => {
            el.style.display = 'none';
        }, timeout);
    };

    

    //  const block = document.querySelector('.winter');
    // const btn = document.querySelector('.real-radio-btn');

    // btn.addEventListener('click', (e) => {
    //     let display = block.style.display
    //     if (display == 'none') {
    //         fadeIn(block, 1000);
    //     } else {
    //         fadeOut(block, 1000);
    //     }
    // }); 

   // мои варианты

//   const btnSeason = document.querySelectorAll('.real-radio-btn');
//   const blockSeason = document.querySelectorAll('.favorites__wrap');

  const winter = document.querySelector('.winter');
  const spring = document.querySelector('.spring');
  const summer = document.querySelector('.summer');
  const autumn = document.querySelector('.autumn');

  const btnWinter = document.getElementById('winter');
  const btnSpring = document.getElementById('spring');
  const btnSummer = document.getElementById('summer');
  const btnAutumn = document.getElementById('autumn');


  btnWinter.addEventListener('click', (e) => {
        let display = winter.style.display;
        if (display == 'none') {
            fadeIn(winter, 2000);
            spring.style.display ='none';
            summer.style.display ='none';
            autumn.style.display ='none';
        } else {
            fadeOut(winter, 2000);
            
        }
    }); 

    btnSpring.addEventListener('click', (e) => {
        let display = spring.style.display;
        if (display == 'none') {
            fadeIn(spring, 2000);
            winter.style.display ='none';
            summer.style.display ='none';
            autumn.style.display ='none';
        }  else {
            fadeOut(spring, 2000);
        }
    }); 


    btnSummer.addEventListener('click', (e) => {
        let display = summer.style.display;
        if (display == 'none') {
            fadeIn(summer, 2000);
            winter.style.display ='none';
            spring.style.display ='none';
            autumn.style.display ='none';
        } else {
            fadeOut(summer, 2000);
        }
    }); 

    btnAutumn.addEventListener('click', (e) => {
        let display = autumn.style.display;
        if (display == 'none') {
            fadeIn(autumn, 2000);
            winter.style.display ='none';
            summer.style.display ='none';
            spring.style.display ='none';
        }  else {
            fadeOut(autumn, 2000);
        }
    }); 


    //модальное окно

    const iconBtn = document.getElementById('open__modal-btn');

    iconBtn.addEventListener('click', function() {
        document.getElementById('my__modal').classList.add('open');
        document.getElementById('registration').style.display = 'none';
        document.querySelector('.modal__box').style.display = 'block';
    })

    document.querySelector('#my__modal .modal__box').addEventListener('click', event =>{
        event._isClickWithInModal = true;
    })

    document.getElementById('my__modal').addEventListener('click', event => {
        if (event._isClickWithInModalReg) return;
        if (event._isClickWithInModal) return;
        if (event._isClickWithInModalProf) return;
        if(event._isClickWithInModalCard) return;
        event.currentTarget.classList.remove('open');
    })
  
    //окно регистрации

    const regBtn = document.getElementById('open__registr-btn');

    regBtn.addEventListener('click', function(){
        document.getElementById('registration').classList.add('open_reg');
        document.getElementById('registration').style.display = 'block';
        document.querySelector('.modal__box').style.display = 'none';
    })

    document.getElementById('close__modal').addEventListener('click', function(){
        document.getElementById('registration').classList.remove('open_reg');
        document.getElementById('my__modal').classList.remove('open');
    })



    document.querySelector('#my__modal .reg__box').addEventListener('click', event => {
        event._isClickWithInModalReg = true;
    })


    document.getElementById('registration').addEventListener('click', event => {
        if(event._isClickWithInModalReg) return;
        event.currentTarget.classList.remove('open_reg');
    })


    /////////local storage

    let data = localStorage.getItem('usersList');
    let usersList = [];

    if(data !== '' && data !== null) {
        usersList = JSON.parse(data);
       
    }


    //функция создать модал окно profile

    const createProfileWindow = function() {
        const profileBtn = document.querySelector('.user__letters');
    
        profileBtn.addEventListener('click', function(){
           document.getElementById('my__modal').classList.add('open');
           document.getElementById('profile__modal').classList.add('open__prof');
           document.querySelector('.modal__box').style.display = 'none';
           document.querySelector('.modal__reg').style.display = 'none';
           document.querySelector('.modal__card').style.display = 'none';
          document.querySelector('.modal__profile').style.display = 'block';
           })


           document.querySelector('#my__modal .profile__box').addEventListener('click', event => {
               event._isClickWithInModalProf = true;
           })
       
       
           document.getElementById('profile__modal').addEventListener('click', event => {
               if(event._isClickWithInModalProf) return;
               event.currentTarget.classList.remove('open__prof');
           })

    }

    //функция создать инициалы для карты профиля

        const createInitialsforProfile = function() {
            let blockForLetters = document.querySelector('.card__initials');

        }


    

    // btnCopy.addEventListener('click', function(){
    //     let copyText = document.getElementById('usernumber');
    //     copyText.select();
    //     document.execCommand('copy');
    // })
    


         //функция создать модал окно profile -card

         const createCardModal = function() {
            const profileCardBtn = document.querySelector('.profile__link');

            profileCardBtn.addEventListener('click', function(){
                document.getElementById('my__modal').classList.add('open');
                document.getElementById('card__modal').classList.add('open__card');
                document.querySelector('.modal__box').style.display = 'none';
                document.querySelector('.modal__reg').style.display = 'none';
                document.querySelector('.modal__profile').style.display = 'none';
                document.querySelector('.modal__card').style.display = 'flex';
                })

            document.getElementById('close__profile__modal').addEventListener('click', function(){
                document.getElementById('card__modal').classList.remove('open__card');
                document.getElementById('my__modal').classList.remove('open');
            })
     
     
                document.querySelector('#my__modal .card__box').addEventListener('click', event => {
                    event._isClickWithInModalCard = true;
                })
            
            
                document.getElementById('card__modal').addEventListener('click', event => {
                    if(event._isClickWithInModalCard) return;
                    event.currentTarget.classList.remove('open__card');
                })
         }





    usersList.forEach((item) => {
        if (item.status == 'active') {


            // вставка букв вместо иконки
            let firstNameUser = item.firstname;
            console.log(firstNameUser)
            let lastNameUser = item.lastname;

            let userLetters = firstNameUser[0] + lastNameUser[0];
        
            let lettersBlock = document.createElement('span');
            lettersBlock.classList.add('user__letters');

            lettersBlock.textContent = userLetters;
            
            document.querySelector('.header-box').append(lettersBlock)
            document.querySelector('.header__img').style.display = 'none';
            lettersBlock.title = `${firstNameUser} ${lastNameUser}`;

            //вставка букв и имени в карту профиля 
            let blockForLetters = document.querySelector('.card__initials');
            blockForLetters.textContent = userLetters;

            let blockForName = document.querySelector('.card__name');
            blockForName.textContent = `${firstNameUser} ${lastNameUser}`;

            //модальное окно profile
            createProfileWindow();

            //вставка в профиль номера карты 

            let profileNumber = document.querySelector('.profile__number');
            let userNumber = item.cardnumber;
            profileNumber.textContent =  userNumber;

            let profileNumberInCard = document.querySelector('.card__usernumber');
            profileNumberInCard.textContent =  userNumber;



            //модальное окно профиль юзера
            createCardModal();


            //функция скопировать номер карты в буфер обмена
            const btnCopy = document.querySelector('.card__copy');

            btnCopy.onclick = () => {
                navigator.clipboard.writeText(userNumber);
    }

         }
      })
        

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

    function createCardnumber(){
        let userNumber = Math.round(Math.random() * 10000000000);
        userNumber = userNumber.toString(16);
        userNumber =`F${userNumber.toUpperCase()}`
         return userNumber;
    }

    submit.addEventListener('click', function() {
        const firstNameUser = firstname.value;
        const lastNameUser = lastname.value;
        const emailUser = email.value;
        const passwordUser = password.value;
        const cardNumber = createCardnumber();
        const status = 'active';

        const user = new User(firstNameUser, lastNameUser, emailUser, passwordUser, cardNumber, status);

        // const userId = 'User' + createId(users);
        // users[userId] = user;

        usersList.push(user);
    
        localStorage.setItem('usersList', JSON.stringify(usersList));

    })

   

    //валидация
    
    function validation(form) {

        function removeError(input){
            const parent = input.parentNode;

            if(parent.classList.contains('error')){
                parent.querySelector('.error__label').remove()
                parent.classList.remove('error')
            }
        }

        function createError(input, text) {
            const parent = input.parentNode;
            const errorLabel = document.createElement('label')

            errorLabel.classList.add('error__label');
            errorLabel.textContent = text;

            parent.classList.add('error');
            parent.append(errorLabel);
        }

        let result = true;

        const allInputs = form.querySelectorAll('input')


        for (const input of allInputs){

            removeError(input)

            if(input.dataset.maxLength) {
                
                if(input.value.length < input.dataset.maxLength){
                    removeError(input)
                    createError(input, `Минимальное количество символов: ${input.dataset.maxLength}`)
                    result = false;
                }
            }

            if(input.value == '') {
                removeError(input)
                createError(input, 'Поле не заполнено!')
                result = false;
            }
        }

        return result;
    }


    document.getElementById('add__form').addEventListener('submit', function(event){
        event.preventDefault();

        if (validation(this)== true) {
            alert('Регистрация прошла успешно!')

            //попытка изменить иконку
            // let firstNameUser = document.querySelector('#firstname').value;
            // let lastNameUser = document.querySelector('#lastname').value;

            // let userLetters = firstNameUser[0] + lastNameUser[0];
        

            // let lettersBlock = document.createElement('span');
            // lettersBlock.classList.add('user__letters');

            // lettersBlock.textContent = userLetters;
            
            // document.querySelector('.header-box').append(lettersBlock)

            // document.querySelector('.header__img').style.display = 'none';

            // lettersBlock.title = `${firstNameUser} ${lastNameUser}`;

            // localStorage.setItem('usersList', JSON.stringify(usersList));


        }
    })