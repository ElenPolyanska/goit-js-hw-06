// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const divBoxes = document.querySelector('#boxes')
// const createBtn = document.querySelector('[data-create]')
// const resetBtn = document.querySelector('[data-destroy]')
// const inputEl = document.querySelector('input')

// createBtn.addEventListener('click', onCreate);
// resetBtn.addEventListener('click', onReset);

// function onCreate(event) { 
//   event.preventDefault();

//   createBoxes(inputEl.value);
// }


// function createBoxes(amount){ 
//   const elements = []
//   for (let i = 0; i < amount; i ++) {
//     const divEl = document.createElement('div');

//     divEl.style.backgroundColor = getRandomHexColor();
//     // let size = 30 + i * 10;
//     divEl.style.width = `${30 + i * 10}px`
//     divEl.style.height = `${30 + i * 10}px`

//       elements.push(divEl);
//   }; 
//   return divBoxes.append(...elements)
// }

// function onReset(event) { 
//   return divBoxes.innerHTML = '';
// }

// ========================

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxes = document.querySelector('#boxes')
const createBtn = document.querySelector('[data-create]')
const resetBtn = document.querySelector('[data-destroy]')
const inputEl = document.querySelector('input')
createBtn.addEventListener('click', addBoxes);
resetBtn.addEventListener('click', ()=> divBoxes.innerHTML = '');

function addBoxes(event) { 
  event.preventDefault();
  createBoxes(inputEl.value);
  inputEl.value = '';
}

function createBoxes(amount){ 
  let elements = '';
  const stepEl = +inputEl.step;
  console.log(stepEl)
  console.log(inputEl.step)
  console.log(inputEl.min)
  console.log(inputEl.max)
  console.log(amount)
  if (+inputEl.min > amount || +inputEl.max < amount) { 

    return console.log('too much');
  }
  for (let i = 0; i < amount; i += stepEl ) {    
    

    elements += `<div style="
    width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()};
    "></div>`;    
  } 
  return  divBoxes.insertAdjacentHTML('beforeend', elements)
 
}


