const express = require("express");
// const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const config = require("../config");
const auth = require("./components/auth/network");
const user = require("./components/user/network");
const swaggerDoc = require("./swagger.json");
const errors = require("../network/errors");

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errors);

app.listen(config.api.port, () => {
  console.log("Api listening at port", config.api.port);
});
