const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text')


inputEl.addEventListener('input', onChange);

function onChange(event) { 
    spanEl.style.fontSize = `${inputEl.value}px`;
}

// console.log(inputEl.attributes.type)