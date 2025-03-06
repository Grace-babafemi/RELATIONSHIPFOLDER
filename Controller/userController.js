const userModel = require("../Model/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const checkIfUserExist = await userModel.findOne({ email });
    if (checkIfUserExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const newUser = await userModel.create({
      name,
      email,
    });
    return res.status(201).json({ newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const getusers = await userModel.find(userId);
    return res.status(200).json({ getusers });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};



module.exports = { createUser, getUser, };
