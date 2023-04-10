// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },

//     decrement() {
//         this.value -= 1;
//     },
// };

// const decrementBtn =
//     document.querySelector('[data-action="decrement"]');
// const incrementBtn =
//     document.querySelector('[data-action="increment"]');
// const counterValue =
//     document.querySelector('#value');

// decrementBtn.addEventListener('click', function () { 
//     counter.decrement();
//     counterValue.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () { 
//     counter.increment();
//     counterValue.textContent = counter.value;
// })


let counterValue=15;

const spanEl=document.querySelector('#value');
const btnDec=document.querySelector('[data-action="decrement"]');
const btnInc=document.querySelector('[data-action="increment"]');

btnDec.addEventListener('click', ()=>{
    counterValue--
    spanEl.textContent=counterValue;
});
btnInc.addEventListener('click', ()=>{
    counterValue++
    spanEl.textContent=counterValue;
});