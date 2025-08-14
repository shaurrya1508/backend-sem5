const express = require('express');

const app = express();

app.use(express.json());
console.log((__dirname + '/public'))
app.use(express.static(__dirname + '/public'))
app.post('/users', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({success:false, message: 'Email and password required' });
    }
    res.json({success:true, message: `User data received${email,password}`});
});

const PORT = 3100;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});