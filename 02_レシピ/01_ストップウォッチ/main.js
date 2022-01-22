const display = document.getElementById("display")
const button = document.getElementById("button")

let sec = 0

const countUp = function () {
  sec++
  display.textContent = sec / 100
}

let id = null

button.onclick = function () {
  if (id === null) {
    //10msごとにcountUpを実行する
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    //stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
