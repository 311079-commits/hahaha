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
            <label class="todo-checkbox">
                <input type="checkbox">
                <span class="checkbox-custom"></span>
            </label>
            <button type="button" class="todo-text">${escapeHtml(name)}</button>
            <button type="button" class="delete-btn" aria-label="Delete todo">刪除</button>
            <div class="todo-description">${escapeHtml(description)}</div>
        `;
        todoList.appendChild(li);
        attachEvents(li);
    }

    function attachEvents(li) {
        const deleteBtn = li.querySelector('.delete-btn');
        const todoText = li.querySelector('.todo-text');
        const description = li.querySelector('.todo-description');
        const checkbox = li.querySelector('input[type="checkbox"]');

        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        todoText.addEventListener('click', function() {
            description.classList.toggle('show');
        });

        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', checkbox.checked);
        });
    }

    function escapeHtml(text) {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    const initialTodos = document.querySelectorAll('.todo-item');
    initialTodos.forEach(attachEvents);
});
