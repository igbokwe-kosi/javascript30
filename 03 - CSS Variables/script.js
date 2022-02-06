'use strict';
const inputs = document.querySelectorAll('.controls input')
console.log(inputs)
const handleUpdate = function(input){
  // console.log(this.value)

  let {sizing} = this.dataset 
  if(!sizing) sizing = ""
  // console.log(sizing)

  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${sizing}`)
}



inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mouseover', handleUpdate));