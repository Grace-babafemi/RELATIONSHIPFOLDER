const mongoose = require("mongoose")
require("dotenv/config")


const {MONGODB_URL} = process.env

const relationShip = async () => {
   try {
    await mongoose.connect(MONGODB_URL)
    console.log("CONNECTED TO DATABASE")
   } catch (error) {
    console.log("Connection failed")
   }
}

module.exports = relationShip