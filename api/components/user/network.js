const express = require("express");

const secure = require("./secure");
const controller = require("./index");
const response = require("../../../network/response");

const router = express.Router();

router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

// Internal functions
function list(req, res, next) {
  controller
    .list()
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch(next);
}
function get(req, res, next) {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch(next);
}
function upsert(req, res, next) {
  controller
    .upsert(req.body)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch(next);
}

module.exports = router;
