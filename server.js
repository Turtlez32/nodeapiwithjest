const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PostRoutes = require("./routes/post");
const CartRoutes = require("./routes/cart");
const PaymentRoutes = require("./routes/payment");
const AdminRoutes = require("./routes/admin");
const PortfolioRoutes = require("./routes/portfolio");
const AuthRoutes = require("./routes/auth");
const UserRoutes = require("./routes/user");
// const mongoose = require("mongoose");

/* App MiddleWare setup */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/posts", PostRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/pay", PaymentRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/portfolio", PortfolioRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/user", UserRoutes);
app.listen(3000);

module.exports = app;
