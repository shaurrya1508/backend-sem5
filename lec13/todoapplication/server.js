import express from "express";
import fs from "fs";
import path from "path"
const app = express();
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/todos", (req, res) => {
    fs.readFile("todo.json", "utf-8", (err, data) => {
        if(err)return res.send("error in reading file");
        res.send(JSON.parse(data));
    });
});



app.listen(4444, () => {
    console.log("Server is running on port 4444");
});