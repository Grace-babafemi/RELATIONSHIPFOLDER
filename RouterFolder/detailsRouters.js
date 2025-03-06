const { Router } = require("express");
const { createUserDetails, updateDetails } = require("../Controller/detailsController");


const detailRouter = Router();

detailRouter.post("/", createUserDetails)
detailRouter.patch("/:id/details/:id", updateDetails)

module.exports = detailRouter;