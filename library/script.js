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

    const fadeIn = (el, timeout, display) => {
        el.style.opacity = 0;
        el.style.display = display || 'block';
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


    const block = document.querySelector('.winter');
    const btn = document.querySelector('.real-radio-btn');

    btn.addEventListener('click', (e) => {
        let display = block.style.display
        if (display == 'none') {
            fadeIn(block, 1000);
        } else {
            fadeOut(block, 1000);
        }
    }); 

   // мои варианты

   const btnSeason = document.querySelectorAll('.real-radio-btn');
   const blockSeason = document.querySelectorAll('.favorites__wrap');

   btnSeason.forEach(function(elem)) {
    
   }