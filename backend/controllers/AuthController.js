const prisma = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 12;

const generateJwtToken = (userObj) => {
  const expiresIn = process.env.JWT_EXPIRY || "1d";
  const token = jwt.sign(userObj, process.env.JWT_SECRET, { expiresIn });
  return token;
};

const logout = (req, res) => {
  console.log("Logged out")
  res
    .cookie("access_token", "", {
      httpOnly: true,
      maxAge: 0,
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json({ message: "You have logged Out Successfully" });
};

module.exports = {
  generateJwtToken,
  logout,
};
