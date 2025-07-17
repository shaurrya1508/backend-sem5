const fs = require ("fs");
let users=[
    {
        id:3,
        name:"sdgss",
        age:"24",
    },
    {
        id:4,
        name:"rsfs",
        age:24
    }
]



fs.writeFile("text2.txt",JSON.stringify(users),(err)=>{
    console.log("err",err);
})

// let newuser = [];
// fs.readFile("text.txt","utf-8",(err,data)=>{
//     newuser = JSON.parse(data);
//     console.log(newuser)
// });