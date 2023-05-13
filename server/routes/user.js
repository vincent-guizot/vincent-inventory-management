const { Router } = require("express");
const userRoute = Router();
const UserController = require("../controllers/UserController");

userRoute.get("/", UserController.getAllUsers);
userRoute.post("/login", UserController.login);
userRoute.post("/register", UserController.register);
userRoute.get("/account/:userId", UserController.getUserById);
userRoute.put("/update/:userId", UserController.update);
userRoute.delete("/delete/:userId", UserController.delete);

module.exports = userRoute;
