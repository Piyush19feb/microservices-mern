const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// connect to the mongo db
// url: mongodb://<server ip address>:<port>/<db name>
mongoose.connect("mongodb://127.0.0.1:27017/ms_mern_catalog_service_db");

const app = express();

app.use(cors("*"));
app.use(express.json());

// add the route
const catalogRouter = require("./routes/catalog");
app.use("/catalog", catalogRouter);

app.listen(5000, "0.0.0.0", () => {
  console.log("catalog service started successfully port 5000");
});
