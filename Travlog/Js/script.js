const menuIcon = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});



















const carousel = document.querySelector('.carousel-container .carousel');
const boxes = document.querySelectorAll('.carousel-container .box');
const prevButton = document.querySelector('.text-botton .prev');
const nextButton = document.querySelector('.text-botton .next');

let index = 0;

function showSlide2() {
    const offset = index * (350 + 50);
    carousel.style.transform = `translateX(-${offset}px)`;
    changeStyle2()
}

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        showSlide2(index);
    }
});

nextButton.addEventListener('click', () => {
    if (index < boxes.length - 1) {
        index++;
        showSlide2();
    }
});

const changeStyle2 = () => {
    if (index == 2) {
      nextButton.style.background = "#e3e3e5";
      nextButton.style.color = "#a4a4a7";
      nextButton.style.cursor = "default";
    } else {
      nextButton.style.background = "";
      nextButton.style.cursor = "";
      nextButton.style.color = "";
    }
    if (index == 0) {
      prevButton.style.background = "#e3e3e5";
      prevButton.style.color = "#a4a4a7";
      prevButton.style.cursor = "default";
    } else {
      prevButton.style.background = "";
      prevButton.style.cursor = "";
      prevButton.style.color = "";
    }
  };


showSlide2();