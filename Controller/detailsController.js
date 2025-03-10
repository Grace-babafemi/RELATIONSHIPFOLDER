const userModel = require("../Model/userModel");
const detailsModel = require("../Model/detailsModel");
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

    createUserDetails.user = getUser._id;
    createDetails.save();
    getUser.details = createDetails._id;
    getUser.save();
    return res.status(201).json({
      Message: "Details created successfully",
      data: createDetails,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const userUpdate = await detailsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!userUpdate) {
      return res.status(404).json({ Message: "User Not Found" });
    }
    return res.status(200).json(userUpdate);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserDetails, updateDetails };
