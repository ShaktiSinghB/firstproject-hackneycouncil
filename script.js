// Fetch the todos from the API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        const todoList = document.getElementById('todo-list');

        // Sort the todos by ID in descending order
        data.sort((a, b) => b.id - a.id);

        // Function to display todos
        const displayTodos = (todos) => {
            todoList.innerHTML = ''; // Clear the current list
            todos.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.classList.add('todo-item');
                
                const todoDetails = document.createElement('div');
                const todoTitle = document.createElement('strong');
                todoTitle.textContent = todo.title;
                const todoInfo = document.createElement('small');
                todoInfo.textContent = `User ID: ${todo.userId}, ID: ${todo.id}`;

                todoDetails.appendChild(todoTitle);
                todoDetails.appendChild(todoInfo);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;

                listItem.appendChild(todoDetails);
                listItem.appendChild(checkbox);
                todoList.appendChild(listItem);
            });
        };

        // Display all todos initially
        displayTodos(data);

        // Search bar functionality
        const searchBar = document.getElementById('search-bar');
        searchBar.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredTodos = data.filter(todo => 
                todo.title.toLowerCase().includes(searchTerm)
            );
            displayTodos(filteredTodos);
        });
    })
    .catch(error => console.error('Error fetching the todos:', error));
