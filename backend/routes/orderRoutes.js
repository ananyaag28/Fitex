const express = require("express");
const { authorization, roleAuthorization } = require("../middlewares/Auth");
const router = express.Router();

router.post("/add", authorization, roleAuthorization(["CONSUMER"]))

module.exports = router;