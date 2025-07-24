const express = require("express");
const app = express();
app.use(express.json());


app.post("/",(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const id = req.body.id;
    res.json({
        "name":name,
        "id":id
    });
});

app.listen(3000,()=>{
    console.log(`server is running`);
})
