const ref = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
} 

ref.input.addEventListener("input", changeSize) 

function changeSize(event) {
ref.text.style.fontSize = `${event.currentTarget.value}px`
}