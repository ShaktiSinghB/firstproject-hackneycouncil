// Fetch the todos from the API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Find the list element by its ID
        const todoList = document.getElementById('todo-list');

        // Sort data by ID in descending order
        data.sort((a, b) => b.id - a.id);

        // Loop through the fetched data
        data.forEach(todo => {
            // Check if the todo is not completed
            if (!todo.completed) {
                // Create a new list item for each uncompleted todo
                const listItem = document.createElement('li');
                listItem.className = 'flex justify-between items-center p-4 bg-gray-200 rounded-lg mb-2';

                // Create a checkbox
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                // Set the text content to include User ID, ID, and title
                const textContent = document.createTextNode(`User ID: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}`);

                // Append the text and checkbox to the list item
                listItem.appendChild(textContent);
                listItem.appendChild(checkbox);

                // Append the new list item to the ul element
                todoList.appendChild(listItem);
            }
        });
    })
    .catch(error => console.error('Error fetching the todos:', error));
