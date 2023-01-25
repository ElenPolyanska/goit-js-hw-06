function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divBoxes = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-create]')
const resetBtn = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input')

createBtn.addEventListener('click', onCreate);
resetBtn.addEventListener('click', onReset);

function onCreate(event) { 
  event.preventDefault();

  createBoxes(inputEl.value);
}


function createBoxes(amount){ 
  const elements = []
  for (let i = 0; i < amount; i ++) {
    const divEl = document.createElement('div');

    divEl.style.backgroundColor = getRandomHexColor();
    let size = 30 + i * 10;
    divEl.style.width = size + 'px'
    divEl.style.height = size + 'px'

      elements.push(divEl);
  }; 
  return divBoxes.append(...elements)
}

function onReset(event) { 
  return divBoxes.innerHTML = '';
}

