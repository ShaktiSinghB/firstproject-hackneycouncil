// Fetch the todos from the API
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => {
        // Find the list element by its ID
        const todoList = document.getElementById('todo-list');

        // Sort the todos by ID in descending order
        data.sort((a, b) => b.id - a.id);

        // Loop through the fetched data
        data.forEach(todo => {
            // Create a new list item for each todo
            const listItem = document.createElement('li');
            listItem.classList.add('todo-item'); // Add the new class for styling

            // Create a div to hold the todo title and details
            const todoDetails = document.createElement('div');

            // Create an anchor element for the todo title
            const todoTitle = document.createElement('a');
            todoTitle.href = `https://jsonplaceholder.typicode.com/todos/${todo.id}`; // Set the hyperlink
            todoTitle.textContent = todo.title; // Set the text content to the todo title
            todoTitle.setAttribute('target', '_blank'); // Open the link in a new tab
            todoTitle.style.textDecoration = 'none'; // Remove underline from hyperlink
            todoTitle.style.color = 'black'; // Ensure the text is readable

            // Create a small element for additional info
            const todoInfo = document.createElement('small');
            todoInfo.textContent = `User ID: ${todo.userId}, ID: ${todo.id}`;

            // Append the title and additional info to the details div
            todoDetails.appendChild(todoTitle);
            todoDetails.appendChild(todoInfo);

            // Create a checkbox input
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox'; // Define as checkbox
            checkbox.checked = todo.completed; // Tick the checkbox if todo is completed

            // Append the checkbox and the details div to the list item
            listItem.appendChild(todoDetails);
            listItem.appendChild(checkbox);

            // Append the new list item to the ul element
            todoList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching the todos:', error));
