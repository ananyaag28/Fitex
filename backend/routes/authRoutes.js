const express = require("express");
const { getConsumer } = require("../middlewares/consumer/Auth");
const { registerConsumer, loginConsumer } = require("../controllers/consumer/AuthController");
const { getCook } = require("../middlewares/cook/Auth");
const { loginCook, registerCook } = require("../controllers/cook/AuthController");
const { authorization } = require("../middlewares/Auth");
const { logout } = require("../controllers/AuthController");


const router = express.Router();

router.post("/signup/consumer", getConsumer, registerConsumer);
router.post("/signup/cook", getCook, registerCook);

router.post("/login/consumer", getConsumer, loginConsumer);
router.post("/login/cook", getCook, loginCook);

router.get("/logout", authorization, logout);

module.exports = router;
