const form = document.querySelector('form')
const input = document.querySelector('#newTask')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const finishedTask = (clickedElement) => {
  const checkDataValue = clickedElement.dataset.check
  const checkBox = document.querySelector(`[data-check="${checkDataValue}"]`)
  const span = document.querySelector(`[data-item="${checkDataValue}"]`)
  
  if (checkBox.checked) {
    span.classList.add('finished')
    return
  }
  span.classList.remove('finished')
}

const addNewTask = (inputValue) => {
  if (inputValue.length) {
    ul.innerHTML += `
    <li data-todo="${inputValue}">
      <input type="checkbox" id="checkTask" data-check="${inputValue}">
      <span data-item="${inputValue}">${inputValue}</span>
      <button data-trash="${inputValue}">🗑️</button>
    </li>
    `
  }

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
  finishedTask(clickedElement)
})

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.newTask.value.trim()
  addNewTask(inputValue)
})