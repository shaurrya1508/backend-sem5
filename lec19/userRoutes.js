const express = require("express");
const router = express.Router();
const { postAddUser, getAllUser } = require("../controller/userController");


router.post("/", postAddUser);
router.get("/", getAllUser);

module.exports = router;
