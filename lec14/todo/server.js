import express from 'express';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 5000;
const TODO_FILE = './todo.json';

// Middleware
app.use(express.json());
app.use(express.static('.'));

// Function to read todos from file
async function readTodos() {
    try {
        const data = await readFile(TODO_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading todos:', error);
        return [];
    }
}

// Function to write todos to file
async function writeTodos(todos) {
    try {
        await writeFile(TODO_FILE, JSON.stringify(todos, null, 2));
        return true;
    } catch (error) {
        console.error('Error writing todos:', error);
        return false;
    }
}

// GET /todos - Read and send todos data
app.get('/todos', async (req, res) => {
    try {
        const todos = await readTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read todos data' });
    }
});

// POST /todos - Add new todo
app.post('/todos', async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        
        const todos = await readTodos();
        
        // Generate new ID
        const newId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
        
        // Create new todo
        const newTodo = {
            id: newId,
            title,
            description
        };
        
        // Add to todos array
        todos.push(newTodo);
        
        // Save to file
        const success = await writeTodos(todos);
        
        if (success) {
            res.status(201).json(newTodo);
        } else {
            res.status(500).json({ error: 'Failed to save todo' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to add todo' });
    }
});

app.listen(PORT, () => {
    console.log(`Todo Server running on http://localhost:${PORT}`);
});
