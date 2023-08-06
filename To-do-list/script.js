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
