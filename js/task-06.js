const ref = {
    input: document.querySelector("#validation-input")
}

ref.input.addEventListener("blur", validAdd) 

function validAdd(event) {
    if(event.currentTarget.value.length === 6){
        ref.input.classList.remove("invalid")
        ref.input.classList.add("valid")
    }else {
        ref.input.classList.remove("valid")
        ref.input.classList.add("invalid")
    }

}
