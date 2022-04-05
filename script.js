const form = document.querySelector('form')
const input = document.querySelector('#newTask')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

const clearContent = () => {
  input.value = ''
}

const addNewTask = (inputValue) => {
  ul.innerHTML += `
    <li>
    <input type="checkbox" id="checkTask">
    ${inputValue}
    <button>Delete</button>
    </li>
  `
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.newTask.value
  addNewTask(inputValue)
  
  clearContent()
})