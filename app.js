let todoForm = document.getElementById('todo-form')
let todoInput = document.getElementById('todo-input')
let btnAdd = document.getElementById('btn-add')
let todoFilter = document.getElementById('todo-filter')
let todoList = document.getElementById('todo-list')

todoForm.addEventListener('submit', function (event) {

    event.preventDefault()

    if (todoInput.value === '') {
        alert('Digite algo!')
        return
    }

    let todo = todoInput.value
    todoInput.value = ''
    
    // TodoDiv
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-list__todo')
    todoDiv.dataset.status = 'uncompleted'
    // item
    let todoLi = document.createElement('li')
    todoLi.classList.add('todo-list__item')
    todoLi.innerText = todo
    // btnComplete
    let btnComplete = document.createElement('button')
    btnComplete.className = 'btn btn-complete'
    btnComplete.innerHTML = '<i class="fas fa-check"></i>'
    btnComplete.addEventListener('click', () => completeTodo(todoDiv))
    // btnDelete
    let btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-delete'
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>'
    btnDelete.addEventListener('click', () => deleteTodo(todoDiv))

    todoDiv.appendChild(todoLi)
    todoDiv.appendChild(btnComplete)
    todoDiv.appendChild(btnDelete)

    todoList.appendChild(todoDiv)

})

todoFilter.addEventListener('change', function (event) {

    let filter = todoFilter.value
    
    let todos = document.querySelectorAll('.todo-list__todo')
    todos.forEach((todo) => todo.classList.remove('disabled-todo'))

    if (filter == 'completed') {
        
        let uncompleteds = document.querySelectorAll('[data-status="uncompleted"]')
        uncompleteds.forEach((todo) => todo.classList.add('disabled-todo'))

    } else if (filter == 'uncompleted') {

        let completeds = document.querySelectorAll('[data-status="completed"]')
        completeds.forEach((todo) => todo.classList.add('disabled-todo'))

    }

})

// Functions
function completeTodo(todo) {

    todo.dataset.status = 'completed'
    todo.style.textDecoration = 'line-through'
    todo.style.transform = 'scale(.95)'
    todo.style.opacity = '.75'

}

function deleteTodo(todo) {

    todo.style.display = 'relative'
    todo.style.top = '50px'
    todo.style.transform = 'rotate(20deg)'
    todo.style.opacity = '0'
    
    setTimeout(() => todo.remove(), 1000)

}