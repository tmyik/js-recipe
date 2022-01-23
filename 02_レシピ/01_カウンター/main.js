const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")

let count = 0

plusButton.onclick = function () {
  count++
  display.textContent = count
}

minusButton.onclick = function () {
  if (count != 0) {
    count--
    display.textContent = count
  }
}

twiceButton.onclick = function () {
  count += count
  display.textContent = count
}
