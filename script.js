const form = document.querySelector('form')
const input = document.querySelector('#newTask')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const finishedTask = (clickedElement) => {
  const checkDataValue = clickedElement.dataset.check
  const todo = document.querySelector(`[data-todo="${checkDataValue}"]`)
  const checkBox = document.querySelector(`[data-check="${checkDataValue}"]`)
  const span = document.querySelector(`[data-item="${checkDataValue}"]`)
  console.log(todo)
  console.log(checkBox.checked)
  if (checkBox.checked) {
    todo.classList.add('finished')
    return
  }
  todo.classList.remove('finished')
}

const createItemList = (inputValue) => {
  let li = document.createElement('li')
  let checkBox = document.createElement('input')
  let span = document.createElement('span')
  let btn = document.createElement('button')
  ul.appendChild(li)
  li.appendChild(checkBox)
  li.appendChild(span)
  li.appendChild(btn)
  li.setAttribute('data-todo', `${inputValue}`)
  checkBox.setAttribute('type', 'checkbox')
  checkBox.setAttribute('id', 'checkTask')
  checkBox.setAttribute('data-check', `${inputValue}`)
  span.textContent = inputValue
  span.setAttribute('data-item', `${inputValue}`)
  btn.textContent = '🗑️'
  btn.setAttribute('data-trash', `${inputValue}`)
}

const addNewTask = (inputValue) => {
  // if (inputValue.length) {
  //   ul.innerHTML += `
  //   <li data-todo="${inputValue}">
  //     <input type="checkbox" id="checkTask" data-check="${inputValue}">
  //     <span data-item="${inputValue}">${inputValue}</span>
  //     <button data-trash="${inputValue}">🗑️</button>
  //   </li>
  //   `
  // }
  if (inputValue.length) createItemList(inputValue)
  
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