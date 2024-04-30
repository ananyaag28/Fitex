const express = require("express");
const { authorization, roleAuthorization } = require("../middlewares/Auth");
const prisma = require("../db");
const router = express.Router();

router.get("/", async (req, res) => {
  const response = await prisma.consumer.findMany();
  res.json(response);
});
router.post("/order", async (req, res) => {
  console.log(req.body);
  // const order = await prisma.order.create({
  //     data: {
  //       ...req.body
  //     },
  //   });
  const order = await prisma.order.create({
    data: {
      recipeId: 6, // Make sure this is a valid recipeId
      orderPlaced: true,
      consumerId: "2",
      consumer: "2",
      cook: null,
    },
  });
});
module.exports = router;
