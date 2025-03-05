const userModel = require("../Model/userModel");
const detailsModel = require("../Model/userModel");

const createUserDetails = async (req, res) => {
  try {
    const { userId, age, address } = req.body;
    const getUser = await userModel.findById(userId);
    if (!getUser) {
      return res
        .status(404)
        .json({ Message: "You do not have an account please sign up" });
    }
    const createDetails = new detailsModel({
      age,
      address,
      user: getUser._id,
    });
    createDetails.save();
    getUser.details = createDetails._id;
    await getUser.save();
    return res
      .status(201)
      .json({
        Message: "Details created successfully",
        data: createDetails,
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserDetails };
