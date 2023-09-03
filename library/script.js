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
    // const modalBox = document.querySelector('.modal__box');

    iconBtn.addEventListener('click', function() {
        document.getElementById('my__modal').classList.add('open');
        document.getElementById('registration').style.display = 'none';
        document.querySelector('.modal__box').style.display = 'block';
    })

    document.querySelector('#my__modal .modal__box').addEventListener('click', event =>{
        event._isClickWithInModal = true;
    })

    document.getElementById('my__modal').addEventListener('click', event => {
        // if (event._isClickWithInModalReg) return;
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    })
  
    //окно регистрации

    const regBtn = document.getElementById('open__registr-btn');

    regBtn.addEventListener('click', function(){
        document.getElementById('registration').classList.add('open_reg');
        document.getElementById('registration').style.display = 'block';
        document.querySelector('.modal__box').style.display = 'none';
    })

    // if (!document.getElementById('registration').classList.contains('open_reg')) {
    //     document.querySelector('.modal__box').style.display = 'block';
    // } 



    document.querySelector('#my__modal .reg__box').addEventListener('click', event => {
        event._isClickWithInModalReg = true;
    })


    document.getElementById('registration').addEventListener('click', event => {
        if(event._isClickWithInModalReg) return;
        event.currentTarget.classList.remove('open_reg');
    })


    //local storage

    let firstname = document.querySelector('#firstname');
    let lastname = document.querySelector('#lastname');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let submit = document.querySelector('#submit');

    let users = {};

    function User(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }


    function createId(users) {
        return Object.keys(users).length;
    }

    submit.addEventListener('click', function() {
        const firstNameUser = firstname.value;
        const lastNameUser = lastname.value;
        const emailUser = email.value;
        const passwordUser = password.value;

        const user = new User(firstNameUser, lastNameUser, emailUser, passwordUser);

        const userId = 'User' + createId(users);
        users[userId] = user;

        console.log(user);

    })