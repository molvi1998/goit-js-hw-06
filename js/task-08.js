const refs = {
    form: document.querySelector(".login-form")
}

refs.form.addEventListener("submit", submitForm)


function submitForm(event) {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const password = event.currentTarget.elements.password.value
    if(email.length === 0 || password.length === 0) {
       return alert("Заполни все поля!")
     }else {
        const formValues = {}
        formValues.email = email
        formValues.password = password
        console.log(formValues)
        }
    refs.form.reset()
}
