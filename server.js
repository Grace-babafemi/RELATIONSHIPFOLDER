const express = require("express");
const relationShip = require("./Config/config");
const morgan = require("morgan");
const userRouter = require("./RouterFolder/userRouter");
const detailRouter = require("./RouterFolder/detailsRouters");
require("dotenv/config");

const { PORT } = process.env;

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", userRouter);
app.use("/api", detailRouter);

relationShip();

app.listen(PORT, () => {
  console.log(new Date().toLocaleDateString(), PORT);
});
