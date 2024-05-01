const prisma = require("../../db");
const bcrypt = require("bcrypt");
const saltRounds = 12;
const { generateJwtToken } = require("../AuthController");

const registerConsumer = async (req, res) => {
  try {
    if (req.consumer) {
      return res
        .status(200)
        .json({ error: "You have already registered. Please Log In" });
    }

    const { password } = req.body

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const consumer = await prisma.consumer.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });

    console.log("Successfully Added Consumer");

    res
      .cookie("ROLE", "CONSUMER", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json({ message: "Successfully Added Consumer" });

  } catch (error) {
    console.log("Error Creating Consumer: ", error);

    res.status(401).json({ error: "Error Creating Consumer" });
  }
};


const loginConsumer = async (req, res) => {
  try {

      if (!req.consumer) {
        return res.status(200).json({ error: "Consumer Does not Exist" });
      }
      const { password } = req.body;
      const dbPassword = req.consumer.password;

      // Comparing hashed password and request password
      const isPasswordCorrect = await bcrypt.compare(password, dbPassword);

      if (isPasswordCorrect) {
        
        const userObj = {
          role: "CONSUMER",
          name: req.consumer.name,
          email: req.consumer.email
        };
        const token = generateJwtToken(userObj);
  
        console.log("Consumer Logged In Successfully")
        
        res
          .cookie("ROLE", "CONSUMER", {
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
          .json({ message: "Consumer Logged In Successfully", data: req.consumer });
      }
      else {
        return res.status(200).json({ error: "Incorrect Password" });
      }
    
  } catch (error) {
    console.log("Error Logging In Consumer: ", error);

    res.status(400).json({ error: "Error Logging In Consumer" });
  }
};

module.exports = {
  registerConsumer,
  loginConsumer,
};
