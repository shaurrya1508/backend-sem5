import express from "express";
import { createBlog, getBlogs, getBlogById } from "../controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const router=express();
const{isLogin}=require('../middleware/authMiddleware.js')
const {createBlog,getBlogs,getBlogById}=require('../controllers/blogController.js')


router.post("/", authMiddleware, createBlog);
router.get("/", authMiddleware, getBlogs);
router.get("/:id", authMiddleware, getBlogById);

export default router;
