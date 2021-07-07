const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User");

const getAllUsers = async (req, res) => {
  // Our login logic starts here
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
  // Our login logic ends here
};

exports.getAllUsers = getAllUsers;
