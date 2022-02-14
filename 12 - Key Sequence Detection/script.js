'use strict';
const pressed = [];
const secretCode = 'kosiso';
console.log(1);
function handler(e) {
  pressed.push(e.key);
  console.log(pressed);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (!pressed.join('').includes(secretCode)) return;

  cornify_add();
}
window.addEventListener('keyup', handler);
console.log(2);
