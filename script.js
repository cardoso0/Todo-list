const form = document.querySelector('form')
const input = document.querySelector('#newTask')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const finishedTask = () => {
  const check = document.querySelector('#checkTask')
  const li = document.querySelector('li')
  if (check.checked) {
    li.classList.add('teste')
    return
  }
  li.classList.remove('teste')
}

const addNewTask = (inputValue) => {
  ul.innerHTML += `
  <li data-todo="${inputValue}">
    <input type="checkbox" id="checkTask" onclick="finishedTask()">
    <span>${inputValue}</span>
    <button data-trash="${inputValue}">🗑️</button>
  </li>
  `
  event.target.reset()
}

const deleteTask = clickedElement => {
  const trashDataValue = clickedElement.dataset.trash
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`)

  if (trashDataValue) {
    todo.remove()
  }
}

ul.addEventListener('click', event => {
  const clickedElement = event.target
  deleteTask(clickedElement)
})

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.newTask.value
  addNewTask(inputValue)
})