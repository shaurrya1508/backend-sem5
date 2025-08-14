const express = require('express');
import { readFile } from 'fs/promises';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${process.cwd()}/public`));
const PORT = 4444;

app.post("/users",(req,res) => {
    
    const user={
        email:req.body.email,
        password:req.body.password
    }
    console.log(user);
    res.json({ success: true, message: "User added successfully", user });
    
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

