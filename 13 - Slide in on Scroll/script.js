'use strict';

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(slide => {
    const slideInt = window.scrollY + window.innerHeight;
    const imageBottom = slide.offsetTop + slide.height;

    const isHalfShown = slideInt > slide.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    isHalfShown && isNotScrolledPast
      ? slide.classList.add('active')
      : slide.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(checkSlide));
