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
    taskItem.classList.add('task-item'); // Adiciona a classe ao <li>

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.classList.add('task-checkbox');
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'Remover';
    removeTaskButton.classList.add('remove-task-btn');

    taskItem.appendChild(taskCheckbox); // Adiciona o checkbox à tarefa
    taskItem.appendChild(taskTextElement); // Adiciona o texto da tarefa
    taskItem.appendChild(removeTaskButton); // Adiciona o botão de remoção
    
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
}


taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-task-btn')) {
        const taskItem = event.target.closest('.task-item'); // Encontra o <li> pai

        if (taskItem) {
            taskList.removeChild(taskItem); // Remove o item da lista
        }
    }
});

