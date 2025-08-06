const form = document.getElementById('todoForm');
const todosList = document.getElementById('todos');

// Function to fetch and display todos
async function loadTodos() {
    try {
        const response = await fetch('http://localhost:5000/todos');
        const todos = await response.json();
        
        // Clear existing todos
        todosList.innerHTML = '';
        
        // Display each todo
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${todo.title}</h3>
                <p>${todo.description}</p>
            `;
            todosList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading todos:', error);
    }
}

// Function to add new todo
// async function addTodo(title, description) {
//     try {
//         const response = await fetch('http://localhost:5000/todos', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ title, description })
//         });
        
//         if (response.ok) {
//             console.log('Todo added successfully');
//             form.reset(); // Clear the form
//             loadTodos(); // Reload todos
//         } else {
//             console.error('Error adding todo');
//         }
//     } catch (error) {
//         console.error('Error adding todo:', error);
//     }
// }

// Handle form submission

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    if (title && description) {
        addTodo(title, description);
    }
});

// Load todos when page loads
document.addEventListener('DOMContentLoaded', loadTodos);
