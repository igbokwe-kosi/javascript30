'use strict';

window.addEventListener('keydown', function(e){
  // console.log(e.keyCode)
  const audio = this.document.querySelector(`audio[data-key='${e.keyCode}']`)
  const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`)
  
  if(!audio) return;
  audio.currentTime = 0
  audio.play()
  // console.log(key)
  key.classList.add('playing')
})

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', function(){
  key.classList.remove('playing')
} ))