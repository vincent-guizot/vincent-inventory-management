const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "Inventory Apps",
  });
});

const userRoutes = require("./user");
const itemRoutes = require("./item");

route.use("/users", userRoutes);
route.use("/items", itemRoutes);

module.exports = route;
