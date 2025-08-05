import express from 'express';
import { readFile } from 'fs/promises';
import path from 'path';
const app = express();
const PORT = 4444;
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/users', async (req, res) => {
    console.log("ctr")
    try {
        const data = await readFile( './userdb.json', 'utf-8');
        res.json(JSON.parse(data));
    } catch (err) {
        res.json({ error: 'Failed to read users data.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running `);
});