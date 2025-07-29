const express = require ('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.post("\adduser", (req, res) => {
console.log(req.body);
res.send('User added successfully!');
});
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
