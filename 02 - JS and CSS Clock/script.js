'use strict';

const setDate = function(){
  const now = new Date()
  const seconds = now.getSeconds()
  console.log(seconds)
  const secondsDeg = ((seconds/60) * 360) +90

  const secondHand = document.querySelector('.second-hand')
  secondHand.style.transform = `rotate(${secondsDeg}deg)`

  const mins = now.getMinutes()
  const minsDeg = ((mins/60) *360) + 90 
  const minHand = document.querySelector('.min-hand')
  minHand.style.transform = `rotate(${minsDeg}deg)`

  const hours = now.getMinutes()
  const hoursDeg = ((hours/12) *360) + 90 
  const hourHand = document.querySelector('.hour-hand')
  hourHand.style.transform = `rotate(${hoursDeg}deg)`
}

setInterval(setDate, 1000);