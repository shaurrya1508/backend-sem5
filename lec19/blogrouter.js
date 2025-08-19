const express= require("express");
const router = express.router();
const User= require("...model/user")
router .post("/blogs",async(req,res)=>{
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).send(blog);
});
router .get("/blogs",async(req, res)=>{
    const blogs = await Blog.find();
    res.send(blogs);
});
module.exports=router;