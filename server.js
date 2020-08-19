const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PostRoutes = require("./routes/post");
const CartRoutes = require("./routes/cart");
const PaymentRoutes = require("./routes/payment");

const post = require("./models/post");
const mongoose = require("mongoose");

/* App MiddleWare setup */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/posts", PostRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/pay", PaymentRoutes);
app.listen(3000);

//console.log("Server Running");

module.exports = app;
