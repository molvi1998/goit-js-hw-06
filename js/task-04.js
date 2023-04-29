const ref = {
    decrementButt: document.querySelector("[data-action='decrement']"),
    incrementButt: document.querySelector("[data-action='increment']"),
    value: document.querySelector("#value")
}

let caunterValue = 0


ref.decrementButt.addEventListener("click", decrement)
ref.incrementButt.addEventListener("click", increment)

function decrement() {
   ref.value.textContent = caunterValue -= 1 
}

function increment() {
    ref.value.textContent = caunterValue += 1
}

