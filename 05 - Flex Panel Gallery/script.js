const panels = document.querySelectorAll('.panel');
panels.forEach(panel =>
  panel.addEventListener('click', function () {
    panel.classList.toggle('open');
    panel.classList.toggle('open-active');
  })
);
// panels.addEventListener('click', function (e) {
//   if (!e.target) return;

//   // [...this.children].forEach(child => {
//   //   child.classList.remove('open');
//   //   child.classList.remove('open-active');
//   // });

//   e.target.classList.toggle('open');
//   e.target.classList.toggle('open-active');
// });
