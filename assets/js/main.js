const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dots = $$('.tab-item')
const slides = $$('.slide-users')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const numberOfSlides = slides.length
var slideNumber = 0
var slideIndex = 0
var taskbar = $('.navbar');

const optionElements = $$('.navbar-list')
const extendElements = $$('.extend')


//Change section
optionElements.forEach((option, index) => {
    const extendElement = extendElements[index]
    option.onclick = function () {
        clickTop()

        $('.navbar-list.active1').classList.remove('active1')
        $('.extend.active1').classList.remove('active1')

        this.classList.add('active1')
        extendElement.classList.add('active1')
    }
})

function clickTop() {
    document.documentElement.scrollTop = 0;
}

//Header fixed -> static

// window.onscroll = function() {
//     if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
//         taskbar.style.position = "fixed";
//         taskbar.style.top = 0;
//         taskbar.style.width = "163.32px" ;
//         taskbar.style.marginTop = "30px" ;
//         taskbar.style.transition = "all 0.2s linear" ;
//     } else {
//         taskbar.style.position = "static";
//         taskbar.style.marginTop = 0 ;
//         taskbar.style.transition = "all 0.2s linear" ;
//     }
// }


//Slides
dots.forEach((dot, index) => {
    const slide = slides[index]

    dot.onclick = function () {
        $('.tab-item.active').classList.remove('active')
        $('.slide-users.active').classList.remove('active')

        this.classList.add('active')
        slide.classList.add('active')
    }
});
//Next slide
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});
//Lùi slide
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
    dots[slideNumber].classList.add('active');
});

//Slide autoplay
var playSlide;

var repeater = () => {
    playSlide = setInterval(() => {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
    
        slideNumber++;
    
        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }
    
        slides[slideNumber].classList.add('active');
        dots[slideNumber].classList.add('active');
    }, 5000);
}

repeater();


// //Show video music
// const playBtns = document.querySelectorAll('.habit_content-icon1')
// const modal = document.querySelector('.modal')
// const modalContainer = document.querySelector('.modal_container')

// function showVideo() {
//     modal.classList.add('open')
// }


// for( const playBtn of playBtns) {
//     playBtn.addEventListener('click',showVideo)
// }

// modalContainer.addEventListener('click', function(e) {
//     e.stopPropagation()
// })

// const playBtn = document.querySelector('.habit_content-icon1')
// const modal = document.querySelector('.modal')
// const modalContainer = document.querySelector('.modal_container')
// const bgBtn = document.querySelector('.habit_content-bg')
// const textBtn = document.querySelector('.habit_content-text--center')


// playBtn.onclick = function() {
//     modal.classList.toggle('open')
// }

// bgBtn.onclick = function() {
//     modal.classList.toggle('open')
// }

// textBtn.onclick = function() {
//     modal.classList.toggle('open')
// }


// modal.addEventListener('click', function(e) {
//         e.stopPropagation()
//     })

//Button icon
// var btn = document.getElementById('btn');

// function Toggle() {
//     if(btn.style.color = "red") {
//         btn.style.color = "grey"
//     } else {
//         btn.style.color= "red"
//     }
// }
