// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners 
loadEventListeners();

function loadEventListeners() {
    // DOM load event - https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event 
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from localStorage 
// When DOM loaded, gets the tasks that are in localStorage 
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // then loop through the tasks that are there 
    tasks.forEach(function (task) {
        // Create li element
        const li = document.createElement('li');
        // Add class from Materialize to style 
        li.className = 'collection-item';
        // Create text note and append to li
        //because there is no taskInput value, input task
        li.appendChild(document.createTextNode(task));
        // Create new link element 
        const link = document.createElement('a');
        // Add class (Materialize)
        link.className = 'delete-item secondary-content';
        // Add icon 
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    });
}

// Add Task 
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class from Materialize to style 
    li.className = 'collection-item';
    // Create text note and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element 
    const link = document.createElement('a');
    // Add class (Materialize)
    link.className = 'delete-item secondary-content';
    // Add icon 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);

    //Append li to ul 
    taskList.appendChild(li);

    // Store in localStorage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input 
    taskInput.value = '';

    // Prevent default submit action
    e.preventDefault();
}

// Store Task
// pass in task; check if there are already tasks in localStorage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // push to array 
    tasks.push(task);
    // has to be stored as a string
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            // with use of bubbling, can act on parent even if the item clicked as the child (remove entire section that also contains the child)
            e.target.parentElement.parentElement.remove();

            // Remove from localStorage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from localStorage
function removeTaskFromLocalStorage(taskItem) {
    // check if there are tasks in localStorage
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // loop through tasks, check if the text of the item you want to remove matches
    // use index to remove 
    //set localStorage again 

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
    //as long as there is something in the list (firstChild)
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // Clear tasks from localStorage
    clearTasksFromLocalStorage();
}

// Clear tasks from localStorage
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    // get all list items and loop through
    // querySelectorAll returns node list -> can use forEach
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        // if -1, it doesn't match
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });


}