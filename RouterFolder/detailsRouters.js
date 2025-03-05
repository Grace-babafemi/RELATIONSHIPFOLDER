const { Router } = require("express");
// const { createUser } = require("../Controller/userController");
const { createUserDetails } = require("../Controller/detailsController");


const detailRouter = Router();

detailRouter.post("/createDetails", createUserDetails)

module.exports = detailRouter;