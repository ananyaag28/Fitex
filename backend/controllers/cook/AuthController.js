const prisma = require("../../db");

const { generateJwtToken } = require("../AuthController");
const bcrypt = require("bcrypt");
const saltRounds = 12;

const registerCook = async (req, res) => {
  try {
    if (req.cook) {
      return res
        .status(200)
        .json({ error: "You have already registered. Please Log In" });
    }

    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const cook = await prisma.cook.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });

    console.log("Successfully Added Cook");

    res
      .cookie("ROLE", "COOK", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({ message: "Successfully Added Cook" });

  } catch (error) {
    console.log("Error Creating Cook: ", error);

    res.status(401).json({ error: "Error Creating Cook" });
  }
};



const loginCook = async (req, res) => {
  try {

      if (!req.cook) {
        return res.status(200).json({ error: "Employee Does not Exist" });
      }
      const { password } = req.body;
      const dbPassword = req.cook.password;

      // Comparing hashed password and request password
      const isPasswordCorrect = await bcrypt.compare(password, dbPassword);

      if (isPasswordCorrect) {
        
        const userObj = {
          role: "COOK",
          name: req.cook.name,
          email: req.cook.email
        };
        const token = generateJwtToken(userObj);
  
        console.log("Cook Logged In Successfully")
        
        res
          .cookie("ROLE", "COOK", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          })
          .cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          })
          .status(200)
          .json({ message: "Cook Logged In Successfully" });
      }
      else {
        return res.status(200).json({ error: "Incorrect Password" });
      }
    
  } catch (error) {
    console.log("Error Logging In Cook: ", error);

    res.status(400).json({ error: "Error Logging In Cook" });
  }
};


module.exports = {
  registerCook,
  loginCook,
};
