const { Router } = require("express");
const { createUser, getUser, updateUser } = require("../Controller/userController");


const userRouter = Router();

userRouter.post("/createUser", createUser)
userRouter.get("/get", getUser)


module.exports = userRouter;