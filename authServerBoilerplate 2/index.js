const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./services/router");
const routes = require("./services/routes");

const app = express();

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV=='production') {
  mongoose.connect(process.env.MONGO_URL);
} else {
  mongoose.connect("mongodb://localhost:introToAuth/introToAuth");
}



app.use(morgan("combined"));
app.use(bodyParser.json());
app.use("/v1", router);
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({errors: err.message});
});

const PORT = process.env.PORT || 3000;

console.log("Listening on", PORT);
app.listen(PORT);
