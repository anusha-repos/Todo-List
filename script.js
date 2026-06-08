const todoArray = [
    {
        name: 'Learn HTML',
        duedate: '2026-06-10'
    },
    {
        name: 'Learn CSS',
        duedate: '2026-06-12'
    }
];

displayTodos();

const today = new Date();
document.getElementById('today-date').innerHTML =
    today.toDateString();

document.querySelector('.js-input')
    .addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

function displayTodos() {

    let todoElements = '';

    for (let i = 0; i < todoArray.length; i++) {

        const todoObject = todoArray[i];

        const html = `
            <div>${todoObject.name}</div>

            <div>${todoObject.duedate}</div>

            <button
                class="delete-todo-button"
                onclick="
                    todoArray.splice(${i},1);
                    displayTodos();
                ">
                Delete
            </button>
        `;

        todoElements += html;
    }

    document.querySelector('.js-todos').innerHTML =
        todoElements;

    document.querySelector('.js-count').innerHTML =
        todoArray.length;
}

function addTodo() {

    const inputElement =
        document.querySelector('.js-input');

    const dateElement =
        document.querySelector('.js-date');

    const inputValue =
        inputElement.value.trim();

    const dateValue =
        dateElement.value;

    if (inputValue === '') {
        alert('Please enter a task!');
        return;
    }

    todoArray.push({
        name: inputValue,
        duedate: dateValue
    });

    inputElement.value = '';
    dateElement.value = '';

    displayTodos();
}