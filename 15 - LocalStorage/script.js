'use strict';
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  console.log(item);
  renderList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}
function renderList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index="${i}" id="items${i}" ${
        plate.done ? 'checked' : ''
      }>
        <label for="items${i}">${plate.text}</label>
      </li>
    `;
    })
    .join('');
}
function toggleDone(e) {
  if (!e.target.matches('input')) return;
  console.log(e.target);
  const { index } = e.target.dataset;
  console.log(index);
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  renderList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
renderList(items, itemsList);
