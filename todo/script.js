// Fetch todos from the API
fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => {
        const taskList = document.getElementById('taskList');
        
        // Display existing todos
        data.todos.forEach(todo => {
            addTaskToList(todo.todo, todo.completed);
        });
    });

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');

    if (taskInput.value === '') {
        alert('Please enter a task.');
        return;
    }

    addTaskToList(taskInput.value, false);
    taskInput.value = '';
}

// Helper function to create and append a task
function addTaskToList(taskText, isCompleted) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = isCompleted; // Set checkbox based on completion status
    checkbox.onchange = function() {
        li.classList.toggle('completed');
    };

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        this.parentElement.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    if (isCompleted) {
        li.classList.add('completed'); // Mark the task as completed
    }
}
