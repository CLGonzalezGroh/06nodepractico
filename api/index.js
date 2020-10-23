const express = require("express");

const config = require("../config");
const user = require("./components/user/network");
const app = express();

//Router
app.use("/api/user", user);

app.listen(config.api.port, () => {
  console.log("Api listening at port", config.api.port);
});
