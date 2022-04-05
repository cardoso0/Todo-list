const form = document.querySelector('form')
const input = document.querySelector('#newTask')
const button = document.querySelector('button')
const ul = document.querySelector('ul')
// const li = document.querySelector('li')
// const check = document.querySelector('#checkTask')


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
  <li>
  <input type="checkbox" id="checkTask" onclick="finishedTask()">
  ${inputValue}
  <button>Delete</button>
  </li>
  `
}

const clearContent = () => {
  input.value = ''
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const check = document.querySelector('#checkTask')
  const inputValue = event.target.newTask.value
  addNewTask(inputValue)
  clearContent()
})