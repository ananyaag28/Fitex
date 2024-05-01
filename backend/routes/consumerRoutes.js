const express = require("express");
const { authorization, roleAuthorization } = require("../middlewares/Auth");
const prisma = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const response = await prisma.consumer.findMany();
  res.json(response);
});
router.post("/order", async (req, res) => {
  try {
  
    const order = await prisma.order.create({
      data: {
        // consumerId: req.body.consumerId,
        cookId: req.body.cookId,
        orderPlaced: req.body.orderPlaced || false, // default to false if not provided
        orderAccepted: req.body.orderAccepted || false, // default to false if not provided
        recipeId: req.body.recipeId,
        consumer: {
          connect: { id: req.body.consumerId }
        }
      },
    });

    console.log("Order created Successfully !!")
    
  } catch (error) {
    console.log("Error in order: ", error)
  }
});
module.exports = router;
