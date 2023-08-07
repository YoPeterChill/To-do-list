const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    taskList.appendChild(taskItem);

    taskInput.value = '';
}

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
    }
});


function addTask(taskText) {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-checkbox');
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    taskItem.appendChild(taskCheckbox); // Adiciona o checkbox à tarefa
    taskItem.appendChild(taskTextElement); // Adiciona o texto da tarefa
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
}



