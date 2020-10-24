const express = require("express");
const controller = require("./index");
const response = require("../../../network/response");

const router = express.Router();

router.post("/login", login);

// Internal functions
function login(req, res) {
  controller
    .login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch((e) => {
      response.error(req, res, "Invalid username or password", 400, e);
    });
}

module.exports = router;
