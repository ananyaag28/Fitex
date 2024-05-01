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
      recipeId : res.recipeId.toString(),
    }
  })
  console.log(response)
  res.json(response);
});

router.put("/orderAccepted", async (req, res) => {
  try {
  console.log(req.body.orderId)
  
    const order = await prisma.order.update({
      where: {
        // recipeId: req.body.recipeId,
        id: req.body.orderId
      },
      data: {
        cookId: req.body.cookId,
        orderPlaced: false, // default to false if not provided
        orderAccepted: true, // default to false if not 
      },

    });
    console.log(order)

    console.log("Order Accepted Successfully !!")
    
  } catch (error) {
    console.log("Error in order: ", error)
  }
});
module.exports = router;
