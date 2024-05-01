const express = require("express");
const { authorization, roleAuthorization } = require("../middlewares/Auth");
const prisma = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  let response = await prisma.order.findMany({
    where: {
        orderPlaced: true
    }
  });

  response = response.map((res) => {
    return {
      ...res,
      recipeId : res.recipeId.toString()
    }
  })
  console.log(response)
  res.json(response);
});
router.post("/orderAccepted", async (req, res) => {
  try {
  
    const order = await prisma.order.update({
      where: {
        recipeId:  req.body.recipeId,
        consumerId: req.body.consumerId,
        cookId: req.body.cookId,
      },
      data: {
        
        // consumerId: req.body.consumerId,
        cookId: req.body.cookId,
        orderPlaced: req.body.orderPlaced || false, // default to false if not provided
        orderAccepted: req.body.orderAccepted || true, // default to false if not provided
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
