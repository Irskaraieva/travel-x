// import hello from "./modules/hello";
// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

// new AirDatepicker('#date');

// console.log(hello);
import mobileNav from './modules/mobile-nav.js';
import loader from './modules/loader.js';
const nav = document.getElementById('mob-nav');
const navMobBtn = document.getElementById('nav-mob-btn');
const navLinks = document.querySelectorAll('.mob-nav-list li');
const navWrapper = document.querySelector('.mob-nav-wrapper');

mobileNav();
loader();

navLinks.forEach(li => {
    li.addEventListener('click', () => {
      
            navMobBtn.classList.remove('active');
            document.body.classList.remove('no-scroll');
            navWrapper.classList.remove('mob-nav-wrapper-open');
            nav.classList.remove('mob-nav-active');
        
    });
});

// window.addEventListener('resize', function () {
//     if (window.innerWidth > 1000) {
//         document.body.classList.remove('no-scroll');
//         navMobBtn.classList.remove('active');
//         nav.style.display = 'flex'
//     } else if ((!navMobBtn.classList.contains('active')) && (window.innerWidth < 1000)) {
//         nav.style.display = 'none';
//     }
// });

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    parallax: true,
    speed: 1000,
    slideToClickedSlide: true,

    keyboard: {
        enabled: true
    },
  
    // If we need pagination
    pagination: {
      el: '.slider-count',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return number < 10 ? '0' + number : number;
     },
     formatFractionTotal: function (number) {
        return number < 10 ? '0' + number : number;
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: false,
    },
    // mousewheel: true,
  });
