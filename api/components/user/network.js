const express = require("express");
const controller = require("./index");
const response = require("../../../network/response");

const router = express.Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", upsert);

// Internal functions
function list(req, res) {
  controller
    .list()
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal server error", 500, e);
    });
}
function get(req, res) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((e) => {
      response.error(req, res, "Internal server error", 500, e);
    });
}
function upsert(req, res) {
  controller
    .upsert(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Internal server error", 500, e);
    });
}

module.exports = router;
