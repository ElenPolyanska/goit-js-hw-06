const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.target;
    

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповніть усі поля!");
  }
    const objectData = {
        email: email.value,
        password:password.value,
    }
    console.log(objectData)
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.target.reset();
}















// const submitEl = document.querySelector('button')
// const inputsEl = document.querySelectorAll('input')


// submitEl.addEventListener('submit', onFormSubmit)

// function onFormSubmit(event) { 
//     event.preventDefault();

//     const formElements = event.currentTarget.formElements
//     console.log(formElements)
//     const email = formElements.email.value
//     const password = formElements.passwords.value

//     const objectData = { email, password }
//     return console.log(objectData)


//     // inputsEl.forEach(item => {
//     //     if (item.value === '') { 
//     //     alert('Всі поля мають бути заповнені')
//     //     }
//     // })
// }
