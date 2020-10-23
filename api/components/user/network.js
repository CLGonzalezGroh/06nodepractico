const express = require("express");
const controller = require("./controller");
const response = require("../../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  userList = controller.list();
  response.success(req, res, userList, 200);
});

module.exports = router;
