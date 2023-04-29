function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  widget: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  changeColor: document.querySelector(".change-color")
}


refs.changeColor.addEventListener("click", changeRandomColor)

function changeRandomColor() {
  const randomColor = getRandomHexColor()
  document.body.style.background = randomColor
  refs.span.textContent = randomColor
}

