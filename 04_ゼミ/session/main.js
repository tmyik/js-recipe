const memo = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoCon = document.getElementById("memo-container")

console.dir(memo)

addButton.onclick = function () {
  const text = document.createElement("div")
  text.className = "text"
  text.textContent = memo.value //テキストの中身をtextのtextcontentに反映
  memoCon.append(text)
  memo.value = null

  const removeButton = document.createElement("button")
  removeButton.className = "removeButton"
  text.append(removeButton)
  removeButton.textContent = "削除"
  removeButton.onclick = function () {
    text.remove()
  }
}
