const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card) //cardをcontainerの中に追加

  //入力欄を空にする
  inputElement.value = ""
}

const createCard = function (text) {
  //cardを作成
  const card = document.createElement("div")
  card.className = "card"

  //テキストを表示するtodoを作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo) //todoをcardの中に追加

  //削除ボタン作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタンを推した時の処理を登録
  deleteButton.onclick = function () {
    //カードを削除
    card.remove()
  }

  //削除ボタンをcardの中に追加する
  card.append(deleteButton)

  return card
}
