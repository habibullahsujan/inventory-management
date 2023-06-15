const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.route");
const brandRoute = require("./routes/brand.route");
const categoryRoute = require("./routes/category.route");
const supplierRoute = require("./routes/supplier.route");
const stockRoute = require("./routes/stock.route");
const storeRoute = require("./routes/store.route");
const userRoute = require("./routes/user.route");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/product", productRouter);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("Application route is working.!");
});

app.get("*", (req, res) => {
  res.send("Route not found.");
});

module.exports = app;
