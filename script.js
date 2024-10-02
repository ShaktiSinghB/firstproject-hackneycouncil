// Fetch the todos from the API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // Find the list element by its ID
    const todoList = document.getElementById("todo-list");

    data.sort((a, b) => b.id - a.id);

    // Loop through the fetched data
    data.forEach((todo) => {
      // Check if the todo is not completed
      if (!todo.completed) {
        // Create a new list item for each uncompleted todo
        const listItem = document.createElement("li");

        // Set the text content to include User ID, ID, title, and completion status
        listItem.textContent = `User ID: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title} (Completed: ${todo.completed})`;

        // Append the new list item to the ul element
        todoList.appendChild(listItem);
      }
    });
  })
  .catch((error) => console.error("Error fetching the todos:", error));
