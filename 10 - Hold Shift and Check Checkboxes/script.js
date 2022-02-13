'use strict';

const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

checkboxes.forEach((checkbox, index) =>
  checkbox.addEventListener('click', function (e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
      checkboxes.forEach(checkbox => {
        console.log(checkbox);
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
          console.log(`starting to check in between`);
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  })
);
