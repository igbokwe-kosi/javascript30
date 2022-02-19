'use strict';

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 100;
function shadow(e) {
  // console.log(e);
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // console.log(this, e.target);
  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;

  console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
