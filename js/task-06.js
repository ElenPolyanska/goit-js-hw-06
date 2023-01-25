const inputEl = document.querySelector('#validation-input');
const valueOfLength = inputEl.dataset.length;
console.log(valueOfLength);

inputEl.addEventListener('blur', onInputCheck);


function onInputCheck(event) { 
    event.preventDefault();

    // console.log(inputEl.value)
    // console.log(inputEl.value.length);
    // console.log(event.currentTarget)
    // console.log(event.target)

    if (Number(valueOfLength) !== inputEl.value.length) { 
        return inputEl.classList.add('invalid');
        
    }
        return inputEl.classList.replace('invalid', 'valid');
}