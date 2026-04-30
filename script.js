document.addEventListener('DOMContentLoaded', function() {
    const addTodoBtn = document.getElementById('add-todo');
    const newTodoName = document.getElementById('new-todo-name');
    const newTodoDescription = document.getElementById('new-todo-description');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', function() {
        const name = newTodoName.value.trim();
        const description = newTodoDescription.value.trim();
        if (name) {
            addTodo(name, description);
            newTodoName.value = '';
            newTodoDescription.value = '';
        }
    });

    function addTodo(name, description) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox">
            <span class="todo-text">${name}</span>
            <button class="delete-btn">Delete</button>
            <div class="todo-description">${description}</div>
        `;
        todoList.appendChild(li);
        attachEvents(li);
    }

    function attachEvents(li) {
        const deleteBtn = li.querySelector('.delete-btn');
        const todoText = li.querySelector('.todo-text');
        const description = li.querySelector('.todo-description');

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        todoText.addEventListener('click', function() {
            description.classList.toggle('show');
        });
    }

    // Attach events to initial todos
    const initialTodos = document.querySelectorAll('.todo-item');
    initialTodos.forEach(attachEvents);
});