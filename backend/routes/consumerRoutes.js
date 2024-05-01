const express = require("express");
const { authorization, roleAuthorization } = require("../middlewares/Auth");
const prisma = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const response = await prisma.consumer.findUnique({
      where: {
        id: Number(req.body.consumerId)
      }
    });
    console.log("Consumer Fetched")
    res.json(response);
    
  } catch (error) {
    console.log(error)
  }
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
