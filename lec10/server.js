const express = require('express');
// const read = require('./io/io.js').read;
// const write = require('./io/io.js').write;
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.post("/addUser",(req, res) => {
    console.log(req.body);
    res.send(`<h3> check terminal</h3>`)   
});
// app.post('/users/add',async(req,res)=>{
//     let data = req.body;

//     let prevData = await read("users.json").catch(() => []);
//     let userFound = null;
//     for(let i = 0 ; i<prevData.length; i++){
//         if(prevData[i].name === data.name){
//             userFound = prevData[i];
//             break;
//         }
//     }

//     if(userFound){
//         res.send("user already exists");
//         return;
//     }
//     else{
//         prevData.push(data);
//     }
    
//     await write("users.json",JSON.stringify(prevData,null,2));
//     res.send("user added successfully");
   
// })

// app.get("/users/:name",async(req,res)=>{
//     let name = req.params.name;
//     let prevData = await read("users.json").catch(() => []);
//     let userFound = null;
//     for(let i=0;i<prevData.length;i++){
//         if(prevData[i].name === name){
//             userFound = prevData[i];
//             break;
//         }

//     }

//     if(userFound){
//         res.send("login successful "+ userFound.name);
//     }
//     else{
//         res.send("user not found");
//     }
// })



app.listen(4000,()=>{
    console.log("server started on port 3000");
})