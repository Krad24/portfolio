"use strict"

// sticky menu

const fixedMenu = document.getElementById('fixedMenu');
const nav = document.getElementById('fixedHeader');

document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  setTimeout(fun, 10);
})

function fun () {
  if (window.scrollY >= 15){
    fixedMenu.classList.add(`${fixedMenu.classList[0]}--fixed`);
    nav.classList.add(`${nav.classList[0]}--fixed`)

  } else {
    fixedMenu.classList.remove(`${fixedMenu.classList[0]}--fixed`)
    nav.classList.remove(`${nav.classList[0]}--fixed`)
  }
}

//end sticky menu


// sliders

const swiper2 = new Swiper('.portfolio__slider', {
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  watchOverflow: true,
  
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
});


//burger menu

const burgerBtn = document.querySelector('.burger');
const burgerMenu = document.querySelector('.menu');
const body = document.querySelector('#body');


burgerBtn.addEventListener('click', (e)=> {
  burgerBtn.classList.toggle(`${burgerBtn.classList[0]}--close`);
  burgerMenu.classList.toggle(`${burgerMenu.classList[0]}--active`);
  body.classList.toggle('lock');
})

body.addEventListener('click', (e)=> {
  if (e.target.classList.value == 'lock') {
    body.classList.remove('lock');
    burgerBtn.classList.remove(`${burgerBtn.classList[0]}--close`);
    burgerMenu.classList.remove(`${burgerMenu.classList[0]}--active`);
  }
})


//end burger menu


// плавное перемещение к якорю header-menu

const asideLinks = document.querySelectorAll('.menu__link');

if (asideLinks) {
  asideLinks.forEach(elem => scrollSmooth(elem))
}

// end плавное перемещение к якорю aside-menu

// плавное перемещение к якорю 

function scrollSmooth (elem) {
  if(elem) {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      const blockID = elem.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
      console.log('done')
    })
  } else {
    console.log("Елемент не передан");
  }
} 

