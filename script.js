// Fetch the todos from the API
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    const todoList = document.getElementById("todo-list");

    // Sort the todos by ID in descending order
    data.sort((a, b) => b.id - a.id);

    // Function to display todos
    const displayTodos = (todos) => {
      todoList.innerHTML = ""; // Clear the current list
      todos.forEach((todo) => {
        const listItem = document.createElement("li");
        listItem.classList.add("todo-item");

         // Wrap the entire listItem in a click event listener
         listItem.addEventListener('click', () => {
          // Redirect to the corresponding todo details page
          window.location.href = `todo_details/index.html?id=${todo.id}`;
        });
        
        // Create a div to hold the todo title and details
        const todoDetails = document.createElement("div");

        // Create the hyperlink for the todo title
        const todoLink = document.createElement("a");
        todoLink.href = `https://jsonplaceholder.typicode.com/todos/${todo.id}`; // Hyperlink to todo API
        todoLink.textContent = todo.title; // Set the title as the link text
        todoLink.target = "_blank";

        const todoInfo = document.createElement("small");
        todoInfo.textContent = `User ID: ${todo.userId}, ID: ${todo.id}`;

        // Append the hyperlink and additional info
        todoDetails.appendChild(todoLink); // Adding hyperlink
        todoDetails.appendChild(todoInfo);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        listItem.appendChild(todoDetails);
        listItem.appendChild(checkbox);
        todoList.appendChild(listItem);

        todoLink.href = `todo_details/index.html?id=${todo.id}`; // Link to details page
        todoLink.textContent = todo.title;
      });
    };

    // Display all todos initially
    displayTodos(data);

    // Search bar functionality
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", (event) => {
      const searchTerm = event.target.value.toLowerCase().trim();
      const searchWords = searchTerm.split(' ');
      const filteredTodos = data.filter((todo) =>
          searchWords.every(word =>
              todo.title.toLowerCase().includes(word)
          )
       );
       displayTodos(filteredTodos);
    
    });
  })
  .catch((error) => console.error("Error fetching the todos:", error));
