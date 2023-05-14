const { Router } = require("express");
const itemRoute = Router();
const ItemController = require("../controllers/ItemController");
const { authentication } = require("../middlewares/auth");

itemRoute.get("/", ItemController.getAllItems);
itemRoute.post("/create", authentication, ItemController.create);
itemRoute.get("/description/:itemId", ItemController.getItemById);
itemRoute.put("/update/:itemId", ItemController.update);
itemRoute.delete("/delete/:itemId", ItemController.delete);

module.exports = itemRoute;
