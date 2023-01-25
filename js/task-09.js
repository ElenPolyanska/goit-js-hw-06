const spanEl = document.querySelector('.color')
const buttonEl = document.querySelector('.change-color')

buttonEl.addEventListener('click', onChangeColor)


function onChangeColor(event) { 

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
  document.body.style.backgroundColor = getRandomHexColor();
  return  spanEl.textContent = getRandomHexColor();
}

