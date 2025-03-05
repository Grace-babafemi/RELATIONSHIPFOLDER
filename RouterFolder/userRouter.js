const { Router } = require("express");
const { createUser, getUser } = require("../Controller/userController");


const userRouter = Router();

userRouter.post("/createUser", createUser)
userRouter.get("/get", getUser)

module.exports = userRouter;